'use strict';

var BaseModel = function (Restangular, Config) {
    Restangular.setBaseUrl(Config.apiUrl);

    var resource = '';
    var api;
    
    this.setResource = function (res){ 
        resource = res; 
        api = Restangular.all(resource); 
    };
    this.one = function (res) { return Restangular.one(res); };
    this.all = function (res) { return Restangular.all(res); };
    
    this.getList = function (query, limit, page) {
        if(limit === undefined) limit = 0;
        if(page === undefined) page = 1;
        if(query === undefined) query = {limit: limit, page: page};
        else {
            query['limit'] = limit;
            query['page'] = page;
        }
        return this.one(resource).get(query);
    };
    
    this.get = function (id) { return api.get(id); };
    
    this.add = function (obj, res) {
        if(res === undefined) res = '';
        return api.post(obj);
    };
    
    this.update = function (id, obj) {
        return this.one(resource).customPUT(obj, id);
    };

    this.updateList = function (obj) {
        return this.all(resource).customPUT(obj);
    };
    
    this.delete = function (id) {
        return api.customDELETE(id);
    };
    
    this.deleteList = function (ids) {
        return api.remove({ 'ids[]': ids });
    };
    
};