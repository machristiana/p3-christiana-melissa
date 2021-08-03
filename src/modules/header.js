class Header {
    constructor(pageTitle, pageLogoSrc) {
        this.pageTitle = pageTitle;
        this.pageLogoSrc = pageLogoSrc;
    }
}

// export const headerPageTitle = new Header('Easy 30 Minute Lunches')

// export const headerPageLogoSrc = new Header('./images/logo5.png')

export const header = new Header('Easy 30 Minute Lunches', '../images/logo7.png')