const flashList = require('@shopify/flash-list');
console.log('Exports from @shopify/flash-list:', Object.keys(flashList));
try {
    const masonry = require('@shopify/flash-list/MasonryFlashList');
    console.log('Found generic path:', !!masonry);
} catch (e) {
    console.log('Direct path failed');
}
