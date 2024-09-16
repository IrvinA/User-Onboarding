describe("User Onboarding App", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    beforeEach(() => cy.visit('localhost:3000'));

    const nameInput = () => cy.get('input[name=name]');
    const ageInput = () => cy.get('input[name=age]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id=button]');

    it('All form elements are present', () => {
        nameInput().should('exist');
        ageInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
    })

    describe('Input fields can be filled and the submit button can be activated', () => {
        it('the submit button starts out disabled', () => {
            submitButton().should('be.disabled');
        })
        it('name input field can be filled', () => {
            nameInput()
                .should('have.value', '')
                .type('Test User')
                .should('have.value', 'Test User');
        })
        it('age input field can be filled', () => {
            ageInput()
                .should('have.value', '')
                .type('45')
                .should('have.value', '45');
        })
        it('email input field can be filled', () => {
            emailInput()
                .should('have.value', '')
                .type('test@test.test')
                .should('have.value', 'test@test.test');
        })
        it('password input field can be filled', () => {
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
        })
        it('ToS checkbox can be checked', () => {
            tosInput()
                .should('have.value', 'on')
                .click();
        })
        it('submit button is activated after all fields have been filled', () => {
            nameInput().type('Test User');
            ageInput().type('45');
            emailInput().type('test@test.test');
            passwordInput().type('password');
            tosInput().click();
            submitButton().should('not.be.disabled');
        })
    })

    describe('All input fields can be filled and a new user can be submitted, an empty field will trigger the validation text', () => {
        it('a new user can be submitted', () => {
            nameInput().type('Test User');
            ageInput().type('45');
            emailInput().type('test@test.test');
            passwordInput().type('password');
            tosInput().click();
            submitButton().click();
            cy.contains('Test User');
        })
        it('an empty field or less than 8 character password will trigger validation text', () => {
            nameInput().type('Test User');
            ageInput().type('45');
            emailInput().type('test');
            passwordInput().type('pass');
            tosInput().click();
            submitButton().should('be.disabled');
            cy.contains('Must be at least 8 characters long');
            cy.contains('Must enter a valid email');
        })
    })
})