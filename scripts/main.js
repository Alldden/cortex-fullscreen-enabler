let stateCheck = setInterval(() => {
    if (document.readyState === "complete") {
        clearInterval(stateCheck);
        $("iframe.iframe").attr("allow", "fullscreen");
        $('iframe.iframe').attr('src', $('iframe.iframe').attr('src'));
    }
}, 150);