function getter(manager, request) {
    return function () {
        return manager.create(request, this);
    };
}

export default {

};