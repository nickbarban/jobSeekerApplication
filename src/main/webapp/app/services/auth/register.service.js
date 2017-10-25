(function () {
    'use strict';

    angular
        .module('jobSeekerApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
