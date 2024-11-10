import userEndpoint from "./user.endpoint.js";
import imageEndpoint from "./image.endpoint.js";

const routes = function (router) {
    userEndpoint(router);
    imageEndpoint(router);
};

export default routes;