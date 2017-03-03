import Services from './';

describe('Authentication', () => {
    let auth, cookies;

    beforeEach(window.module(Services));
    beforeEach(inject(($injector) => {
        auth = $injector.get('auth');
        cookies = $injector.get('$cookies');
    }));

    beforeEach(() => {
        cookies.remove('token');
    });

    it('should not be logged in', () => {
        expect(auth.isLoggedIn()).to.eq(false);
    });

    it('should be logged in', () => {
        auth.login();
        expect(auth.isLoggedIn()).to.eq(true);
    });

    it('should have a token value of "123456789"', () => {
        auth.login();
        expect(auth.token).to.eq('123456789');
    });

    it('should change the token value to "4321"', () => {
        auth.login();
        auth.token = '4321';
        expect(auth.token).to.eq('4321');
    });

    it('should logout', () => {
        auth.login();
        auth.logout();
        expect(auth.isLoggedIn()).to.eq(false);
    })
});
