class LunchGenerator {
    constructor(foodImages, foodTitle, foodDescriptions, button) {
        this.foodImages = foodImages;
        this.foodTitle = foodTitle;
        this.foodDescriptions = foodDescriptions;
        this.button = button;
    }


    randomizeLunches() {
        const meals = [
            { image: "../images/bltpasta.png", title: "BLT Pasta with Shrimp", description: "There’s a reason BLTs are loved by just about everyone. But when you’re looking for something a little more creative, this twist on the classic sandwich delivers. Simply substitute pasta for bread, and spinach for lettuce, then throw in quick-cooking shrimp to add more protein, and dinner is on the table." },
            { image: "../images/ratatouille.png", title: "Ratatouille", description: "A popular Provençal dish, ratatouille [ra-tuh-TOO-ee] blends and simmers eggplant, tomatoes, zucchini, and more into a delectable stew-like concoction. With protein and fiber-rich chickpeas added, this becomes an even better meatless meal." },
            { image: "../images/carnitas-tacos.png", title: "Carnitas-Style Turkey Tacos", description: "The king of the taco cart — carnitas — gives leftover turkey new life with this simple yet flavor-packed dish." },
            { image: "../images/pestopasta.png", title: "Sage & Walnut Pesto Pasta with Sweet Potatoes", description: "Woodsy and nutty, this unique sage and walnut pesto is the star of this dish. The pasta and sweet potatoes play perfectly with the sauce — it’s so flavorful and comforting." },
            { image: "../images/cajungrilledshrimp.png", title: "Cajun Grilled Shrimp", description: "The flavors of New Orleans take a front seat in these Cajun Grilled Shrimp. Cajun cooking is bold and known for its hefty dose of seasoning. A simple spice paste adds flavor to shrimp, a staple of Cajun cuisine." },
            { image: "../images/green-gazpacho.png", title: "Green Gazpacho", description: "With veggies so abundant this time of year, gazpacho [gahz-PAH-choh], a traditional cold Spanish summertime soup, is perfect when you’re trying to tame the heat of the day. When you think gazpacho, the classic red tomato variety probably comes to mind. But white and green are also variations. This green gazpacho skips the tomato and uses ingredients typical of white gazpacho, like cucumber, grapes, bread, and almonds, plus avocado, jalapeño, parsley, and cilantro, for a refreshing flavor and color." },
            { image: "../images/pimento-grilled-cheese.png", title: "Pimento Grilled Cheese", description: "What goes with tomato soup? Grilled cheese, of course. But no ordinary one will do. Pimento cheese takes this menu down south for a grilled cheese like no other." },
            { image: "../images/steak-stuffed-avocados.png", title: "Steak-Stuffed Avocados", description: "Load up on keto-friendly ingredients, like avocado, cheese, steak, and bacon, to make these delicious and nutritious Steak-Stuffed Avocados." },
            { image: "../images/steak-quinoa-bowl.png", title: "Steak & Quinoa Bowl", description: "This healthy Steak & Quinoa Bowl is packed with vegetables and tossed with a balsamic mustard vinaigrette that melds this dish together. Plus, it's colorful and a real feast for the eyes." },
            { image: "../images/roasted-salmon.png", title: "Roasted Salmon with Asparagus and Parsley Salad", description: "This salmon recipe features just a few simple ingredients but imparts big, fresh flavor. Top the roasted salmon with asparagus, fresh parsley, and a paleo-friendly salad dressing." }
        ]
        let randomIndex = Math.floor(Math.random() * meals.length);
        return meals[randomIndex];
    }

    showResults() {

        let image = document.getElementById("image");
        let title = document.getElementById("title");
        let description = document.getElementById("description");


        document.getElementById("button").addEventListener("click",
            () => {
                let meal = this.randomizeLunches();
                image.src = meal.image;
                title.innerHTML = meal.title;
                description.innerHTML = meal.description;
                document.getElementById("image").style.border = "white solid 4px";
                document.getElementById("figcaption").style.backgroundColor = "#384c65";

                let mediaQuery = window.matchMedia('(min-width: 600px)')
                if (mediaQuery.matches) {
                    document.getElementById("button2").style.marginTop = "0";
                } else {
                    document.getElementById("button2").style.marginTop = "auto";
                };


                let mediaQuery2 = window.matchMedia('(min-width: 1000px)')


                if (mediaQuery2.matches) {
                    document.getElementById("container").style.margin = "0 auto";
                    document.getElementById("container").style.maxWidth = "80%";
                } else {
                    document.getElementById("container").style.margin = "0";
                    document.getElementById("container").style.maxWidth = "100%";
                };
            }
        );
    }
}


export const lunches = new LunchGenerator(" ", " ", " ", "Pick your Lunch!");