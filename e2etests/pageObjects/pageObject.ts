abstract class PageObject {
    open() {
        const url = this.getRelativeUrl();
        browser.get(url);
        browser.waitForAngular();
    }

    navigateTo(linkText: string) {
        element(by.linkText(linkText)).click();
    }

    abstract getRelativeUrl(): string;
}

export default PageObject;
