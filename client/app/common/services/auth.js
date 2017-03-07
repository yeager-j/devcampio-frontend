export default class AuthenticationService {
    constructor($http, $cookies) {
        "ngInject";

        this.$http = $http;
        this.$cookies = $cookies;
    }

    login() {
        this.$cookies.put('token', '123456789');
    }

    logout() {
        this.$cookies.remove('token');
    }

    register(data) {
        return this.$http({
            method: 'POST',
            url: 'http://localhost:4000/api/register',
            data: data
        });
    }

    isLoggedIn() {
        return !!this.$cookies.get('token');
    }

    get token() {
        return this.$cookies.get('token');
    }

    set token(id) {
        this.$cookies.put('token', id);
    }
}
