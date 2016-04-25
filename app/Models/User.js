'use strict';

app.factory('userModel', function (Restangular, Config) {
    
    var UserModel = new BaseModel(Restangular, Config);
    UserModel.setResource('users');
    
    UserModel.me = function () {
        return UserModel.one('me').get();
    };
    
    UserModel.register = function (email, password, first_name, last_name) {
        return UserModel.one('register').post('', { email: email, password: password, first_name: first_name, last_name: last_name});
    };
    
    UserModel.forgotPassword = function (email) {
        return UserModel.one('forgot').post('', { email: email });
    };
    
    UserModel.resetPassword = function (code, password, confirmPassword) {
        return UserModel.one('reset').post(code, {password: password, confirmPassword: confirmPassword });
    };

    UserModel.confirmRegister = function (code) {
        return UserModel.one('confirm/'+code).put();
    };

    UserModel.update = function (obj) {
        var user = UserModel.one('me');
        user.first_name = obj.first_name;
        user.last_name = obj.last_name;
        user.email = obj.email;
        user.password = obj.password;
        user.old_password = obj.old_password;
        user.confirmPassword = obj.confirmPassword;
        return user.put();
    };

    UserModel.getEmailChangeCode = function (email) {
        return UserModel.one('my/send_code').post('', { email: email });
    };

    UserModel.changeEmail = function (code) {
        return UserModel.one('my/change_email').post('', { code: code });
    };

    UserModel.deleteUser = function (userid, password) {
        return UserModel.one('my/delete').customDELETE("", null, null, { password: password });
    };
    
    return UserModel;
});