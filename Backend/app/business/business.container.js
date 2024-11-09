import userManager from "./user.manager.js";

function getter(manager, request) {
    return function () {
        return manager.create(request, this);
    };
}

export default {
    getUserManager: getter(userManager),
};