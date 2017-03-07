class LoginController {
    constructor(auth, $state) {
        "ngInject";

        this.name = 'login';
        this.auth = auth;
        this.$state = $state;

        if(this.auth.isLoggedIn()){
            this.$state.transitionTo('home');
        }
    }

    login() {
        this.auth.login();
        this.$state.transitionTo('home');
    }
}

export default LoginController;
