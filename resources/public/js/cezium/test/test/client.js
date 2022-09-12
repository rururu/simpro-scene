// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('test.client');
goog.require('cljs.core');
goog.require('cesium.client');
test.client.init_client = (function test$client$init_client(){
cesium.client.add_terrain.call(null,null,cesium.client.VIEWER);

cesium.client.camera_home.call(null,cesium.client.CAMERA,cesium.client.HOME_VIEW);

cesium.client.start_event_processing.call(null,cesium.client.PORT,cesium.client.VIEWER);

cesium.client.add_orbit_button.call(null,cesium.client.CAMERA);

return cesium.client.mouse_move.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
cesium.client.EVENT_DEBUG = true;
(window.onload = test.client.init_client.call(null));

//# sourceMappingURL=client.js.map
