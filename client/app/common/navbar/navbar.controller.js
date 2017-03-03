class NavbarController {
    constructor(auth) {
        this.name = 'navbar';
        this.auth = auth;
    }
}

NavbarController.$inject = ['auth'];

export default NavbarController;
