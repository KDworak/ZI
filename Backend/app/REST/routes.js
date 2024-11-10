import userEndpoint from "./user.endpoint.js";

const routes = function (router) {
    userEndpoint(router);
};

export default routes;