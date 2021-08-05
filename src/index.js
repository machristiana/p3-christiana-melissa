import { header } from "./modules/header";
import { footer } from "./modules/footer";
import { lunches } from "./modules/lunch-generator";


class App {

    constructor() {
        this.renderTemplate();
        lunches.showResults();
    }

    renderTemplate() {
        const template = `
            <body>
                <div class="site">
                    <header>
                        <div class="logo">
                            <img src="${header.pageLogoSrc}" alt="Logo" title="Logo">
                        </div>
                        <h1>${header.pageTitle}</h1>
                    </header>
                    <main id="container" class="site-content">
                        <figure id="randomize">
                            <div>
                                <img id="image" src="${lunches.foodImages}" alt="Lunch Image" title="Lunch Image">
                            </div>
                            <figcaption id="figcaption">
                                <h2 id="title">${lunches.foodTitle}</h2>
                                <p id="description">${lunches.foodDescriptions}</p>
                            </figcaption>
                        </figure>
                        <div id="button2" class="button">
                            <a href="#" id="button">${lunches.button}</a>
                        </div>
                    </main>
                    <footer>
                        <p>${footer.copyright}</p>
                        <p>${footer.developer}</p>
                    </footer>
                </div>
            </body>
        `;

        document.body.innerHTML = template;
    }
}

new App;