"use strict";
!function() {
    var b, a, c = "dark-mode", d = "light-mode", e = "(prefers-color-scheme: dark)", f = window.matchMedia(e), h = f.media === e;
    try {
        var g = localStorage.getItem("scheme-mode");
        g && (a = JSON.parse(g));
    } catch  {}
    b = h && "system" === a ? f.matches : ("light" === a || "dark" === a) && "dark" === a, document.querySelector("html").classList.add(b ? c : d), document.querySelector("html").classList.remove(b ? d : c);
}();

//# sourceMappingURL=index.d9c3e416.js.map
