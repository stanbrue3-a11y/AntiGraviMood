import Foundation
import PDFKit
import AppKit

let arguments = CommandLine.arguments
guard arguments.count > 2 else {
    print("Usage: swift render_pdf.swift <path_to_pdf> <output_folder>")
    exit(1)
}

let pdfPath = arguments[1]
let outputFolder = arguments[2]

let fm = FileManager.default
try? fm.createDirectory(atPath: outputFolder, withIntermediateDirectories: true, attributes: nil)

let url = URL(fileURLWithPath: pdfPath)
guard let document = PDFDocument(url: url) else {
    print("Failed to load PDF")
    exit(1)
}

for i in 0..<document.pageCount {
    guard let page = document.page(at: i) else { continue }
    let pageBounds = page.bounds(for: .mediaBox)
    let scale: CGFloat = 2.0 // Render at 2x resolution for excellent quality
    let size = NSSize(width: pageBounds.width * scale, height: pageBounds.height * scale)
    
    let image = NSImage(size: size)
    image.lockFocus()
    
    if let context = NSGraphicsContext.current?.cgContext {
        // Set white background
        context.setFillColor(NSColor.white.cgColor)
        context.fill(CGRect(origin: .zero, size: size))
        
        // Scale and draw PDF page
        context.scaleBy(x: scale, y: scale)
        page.draw(with: .mediaBox, to: context)
    }
    
    image.unlockFocus()
    
    guard let tiffData = image.tiffRepresentation,
          let bitmap = NSBitmapImageRep(data: tiffData),
          let pngData = bitmap.representation(using: .png, properties: [:]) else {
        print("Failed to render page \(i+1)")
        continue
    }
    
    let outputPath = "\(outputFolder)/page_\(i + 1).png"
    try? pngData.write(to: URL(fileURLWithPath: outputPath))
    print("Saved page \(i + 1) to \(outputPath)")
}
