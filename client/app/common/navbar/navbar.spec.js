import NavbarModule from './navbar'

describe('Navbar', () => {
    let $rootScope, $state, $location, $componentController, $compile, $document, auth;

    beforeEach(window.module(NavbarModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $document = $injector.get('$document');
        auth = $injector.get('auth');
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
        let controller;

        beforeEach(() => {
            controller = $componentController('navbar', {
                $scope: $rootScope.$new(),
                auth: auth
            });

            auth.login();
        });

        it('should have a variable called name and it be equal to "navbar"', () => {
            expect(controller.name).to.eq('navbar');
        });

        it('should have a variable called auth in the controller', () => {
            expect(controller).to.have.property('auth');
        });

        it('token should be equal to "123456789"', () => {
            expect(controller.auth.token).to.eq('123456789');
        });
    });

    describe('View', () => {
        // view layer specs.
        let scope, template, controller;

        beforeEach(() => {
            scope = $rootScope.$new();
            auth.login();
            template = $compile('<navbar></navbar>')(scope);
            scope.$apply();
            controller = $componentController('navbar', {
                $scope: $rootScope.$new()
            });
        });

        it('should display the token in the profile link', () => {
            expect(template.find('span').html()).to.eq(auth.token);
        });
    });
});
