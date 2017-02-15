(function () {
    'use strict';

    angular
        .module('avaliacao360IsraelApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
