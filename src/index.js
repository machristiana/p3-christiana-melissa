// import { headerPageTitle } from "./modules/header.js";
// import { headerPageLogoSrc } from "./modules/header.js";
import { header } from "./modules/header";
import { footer } from "./modules/footer";
import { lunches } from "./modules/lunch-generator";


class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
            <header>
                <img src="${header.pageLogoSrc}" alt="" title="">
                <h1>${header.pageTitle}</h1>
            </header>
            <main>
                <figure id="randomize">
                    <img src="${lunches.foodImages}" alt="" title="">
                    <figcaption>
                        <h2>${lunches.foodTitle}</h2>
                        <p>${lunches.foodDescriptions}</p>
                    </figcaption>
                </figure>
                <button id="button">${lunches.button}</button>
            </main>
            <footer>
                <p>${footer.copyright}</p>
                <p>${footer.developer}</p>
            </footer>
        `;

        document.body.innerHTML = template;
    }
}

new App;