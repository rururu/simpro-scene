// Compiled by ClojureScript 1.10.439 {}
goog.provide('cesium.testclient');
goog.require('cljs.core');
goog.require('cesium.client');
cesium.testclient.init_client = (function cesium$testclient$init_client(){
cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.client.HOME_VIEW);

cesium.client.start_czml_processing.call(null,cesium.client.CZML_URL,cesium.client.VIEWER);

return cesium.client.add_orbit_button.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
window.onload = cesium.testclient.init_client.call(null);

//# sourceMappingURL=testclient.js.map
