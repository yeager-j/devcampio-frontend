import RegisterModule from './register'
import RegisterController from './register.controller';
import RegisterComponent from './register.component';
import RegisterTemplate from './register.html';

describe('Register', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RegisterModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    makeController = () => {
      return new RegisterController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = RegisterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RegisterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RegisterController);
      });
  });
});
