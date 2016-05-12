import PageObject from './pageObject';

export default class HomePage extends PageObject {
    get firstH1(): webdriver.promise.Promise<string> {
        return element(by.tagName('h1')).getText();
    }

    get firstParagraph(): webdriver.promise.Promise<string> {
        return element(by.tagName('p')).getText();
    }

    getRelativeUrl(): string {
        return '/';
    }
}
