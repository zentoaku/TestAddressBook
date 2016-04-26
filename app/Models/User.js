'use strict';

app.factory('userModel', function ($localStorage, $q) {

    var UserModel = new BaseModel($localStorage, $q);

    var users = [
        {
            id: 1,
            first_name: 'Piotr',
            last_name: 'Sapiejewski',
            email: 'p.sapiejewski@gmail.com',
            country: 'Poland'
        },
        {
            id: 2,
            first_name: 'Piotr',
            last_name: 'Sapiejewski',
            email: 'p.sapiejewski@gmail.com',
            country: 'Germany'
        },
        {
            id: 3,
            first_name: 'Piotr',
            last_name: 'Sapiejewski',
            email: 'p.sapiejewski@gmail.com',
            country: 'France'
        },
        {
            id: 4,
            first_name: 'Piotr',
            last_name: 'Sapiejewski',
            email: 'p.sapiejewski@gmail.com',
            country: 'England'
        }
    ];

    UserModel.setList(users);
    return UserModel;
});