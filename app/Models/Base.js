'use strict';

var BaseModel = function ($localStorage) {
    var data;
    
    this.setList = function (list) {
        if($localStorage.users === undefined) {
            this.data = list;
        } else {
            this.data = $localStorage.users;
        }
    };
    this.getList = function () {
        return this.data;
    };
    
    this.get = function (id) { 
        var user = this.data.filter(function(item) {
            if(item.id == id) {
                return item;
            }
        });
        return angular.copy(user[0]);
    };
    
    this.add = function (obj) {
        var user = (this.data.length===0)?{id: 0}:this.data[this.data.length-1];
        obj.id = user.id+1;
        this.data.push(obj);
        $localStorage.users = this.data;
        return true;
    };
    
    this.update = function (id, obj) {
        var user = this.data.filter(function(item) {
            if(item.id == id) return item;
        });
        var i = this.data.indexOf(user[0]);
        this.data[i] = obj;
        $localStorage.users = this.data;
        return true;
    };

    this.delete = function (id) {
        var users = this.data.filter(function(item) {
            if(item.id != id) return item;
        });
        $localStorage.users = users;
        return true;
    };
    
};