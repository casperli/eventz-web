/// <reference path="typings/browser.d.ts" />
import HomePage from './pageObjects/home'

describe('App', () => {
    let homePage: HomePage;

    beforeEach(() => {
       homePage = new HomePage();
       homePage.open();
    });

    it('should display the "Generators" header', () => {
        expect(homePage.firstH1).toEqual('Generators');
    });

    it('should open the About page when the link is clicked', () => {
        homePage.navigateTo('About');
        expect(homePage.firstParagraph).toContain('About this application');
    });
});
