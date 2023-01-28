var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length > 0) {
      $(mutation.addedNodes).each(function () {
        if (this.tagName == "IFRAME" && $(this).hasClass("iframe")) {
          this.setAttribute("allow", "fullscreen");
          this.contentWindow.location.reload();
        }
      });
    }
  });
});

observer.observe(document, { childList: true, subtree: true });