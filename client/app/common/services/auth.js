export default class AuthenticationService {
    constructor($http, $cookies) {
        this.$http = $http;
        this.$cookies = $cookies;
    }

    login() {
        this.$cookies.put('token', '123456789');
    }

    logout() {
        this.$cookies.remove('token');
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

AuthenticationService.$inject = ['$http', '$cookies'];
