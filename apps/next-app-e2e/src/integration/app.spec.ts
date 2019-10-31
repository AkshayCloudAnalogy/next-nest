import { getGreeting } from '../support/app.po';

describe('next-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to next-app!');
  });
});
