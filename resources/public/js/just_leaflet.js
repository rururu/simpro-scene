window.CLOSURE_UNCOMPILED_DEFINES = {};
window.CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="js/just_leaflet/goog/base.js"></script>');
document.write('<script src="js/just_leaflet/goog/deps.js"></script>');
document.write('<script src="js/just_leaflet/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("leaflet.client");</script>');