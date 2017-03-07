import Services from './';

describe('Form Validation', () => {
    let validation;

    beforeEach(window.module(Services));
    beforeEach(inject($injector => {
        validation = $injector.get('validation');
    }));

    it('should check if field exists and return false', () => {
        let check = validation.validate([
            {
                value: undefined,
                checks: {
                    required: true
                }
            }
        ]);

        expect(check.passed).to.eq(false);
    });

    it('should check if field exists and return true', () => {
        let check = validation.validate([
            {
                value: 'John',
                checks: {
                    required: true
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should check the minimum length and return false', () => {
        let check = validation.validate([
            {
                value: 'Hello, World!',
                checks: {
                    minlength: 15
                }
            }
        ]);

        expect(check.passed).to.eq(false);
    });

    it('should check the minimum length and return true', () => {
        let check = validation.validate([
            {
                value: 'Hello, World!',
                checks: {
                    minlength: 10
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should check the max length and return false', () => {
        let check = validation.validate([
            {
                value: 'Hello, World!',
                checks: {
                    maxlength: 10
                }
            }
        ]);

        expect(check.passed).to.eq(false);
    });

    it('should check the max length and return true', () => {
        let check = validation.validate([
            {
                value: 'Hello, World!',
                checks: {
                    maxlength: 15
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should report the correct error when the minimum length is wrong', () => {
        let check = validation.validate([
            {
                value: 'Hello, World!',
                checks: {
                    minlength: 15
                }
            }
        ]);

        expect(check.errors[0]).to.eq('Field is not long enough.');
    });

    it('should pass the regex', () => {
        let check = validation.validate([
            {
                value: 'HelloWorld',
                checks: {
                    regex: /^[a-zA-Z0-9_-]*$/
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should not pass the regex', () => {
        let check = validation.validate([
            {
                value: 'Hello World!',
                checks: {
                    regex: /^[a-zA-Z0-9_-]*$/
                }
            }
        ]);

        expect(check.errors[0]).to.eq('Field does not pass the regex.');
    });

    it('should pass the matching check where A equals B', () => {
        let check = validation.validate([
            {
                value: 'Hello World!',
                checks: {
                    matches: 'Hello World!'
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should pass the matching check where A is contained within array B', () => {
        let check = validation.validate([
            {
                value: 'B',
                checks: {
                    matches: ['A', 'B', 'C', 'D']
                }
            }
        ]);

        expect(check.passed).to.eq(true);
    });

    it('should not pass the matching check where A is contained within array B', () => {
        let check = validation.validate([
            {
                value: 'E',
                checks: {
                    matches: ['A', 'B', 'C', 'D']
                }
            }
        ]);

        expect(check.errors[0]).to.eq('Field is not a valid value.');
    });
});
