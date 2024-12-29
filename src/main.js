// Prevent attaching message handlers to iFrames
if (window.top === window) {
    // Listen for all events from the native app extension
    safari.self.addEventListener("message", handleMessage);
}

function handleMessage(event) {
        
    switch (event.name) {
            
    case "image-scrape-utility.begin":
        beginScrapingImages();
        break;
            
    case "screenshot-utility.begin":
        beginScreenshotCapture();
        break;
        
    case "screenshot-utility.scroll-to-origin":
        scrollToOrigin(event.message.originX, event.message.originY);
        break;
        
    case "screenshot-utility.end":
        endScreenshotCapture();
        break;
            
    default:
        console.log("Unknown safari app extension event.");
        
    };
    
}
