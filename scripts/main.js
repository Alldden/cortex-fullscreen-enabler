fullscreen = ()=> {
    $("iframe.iframe").attr("allow", "fullscreen");
    $('iframe.iframe').attr('src', $('iframe.iframe').attr('src'));
}

var target = document.body;

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        var node = mutation.addedNodes[i];
        if (node.tagName === 'iframe') {
          console.log('Iframe detected');
          observer.disconnect();
        }
      }
    }
  });
});

var config = { childList: true, subtree: true };

observer.observe(target, config);

var iframes = document.getElementsByTagName("iframe");
for(var i = 0; i < iframes.length; i++) {
  if (iframes[i].classList.contains("iframe")) {
    fullscreen();
    observer.disconnect();
  }
}
