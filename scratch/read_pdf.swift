import Foundation
import PDFKit

let arguments = CommandLine.arguments
guard arguments.count > 1 else {
    print("Usage: swift read_pdf.swift <path_to_pdf>")
    exit(1)
}

let pdfPath = arguments[1]
let url = URL(fileURLWithPath: pdfPath)
if let document = PDFDocument(url: url) {
    for i in 0..<document.pageCount {
        if let page = document.page(at: i), let pageText = page.string {
            print("--- Page \(i + 1) ---")
            print(pageText)
        }
    }
} else {
    print("Failed to load PDF: \(pdfPath)")
    exit(1)
}
