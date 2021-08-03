class LunchGenerator {
    constructor(foodImages, foodTitle, foodDescriptions, button) {
        this.foodImages = foodImages;
        this.foodTitle = foodTitle;
        this.foodDescriptions = foodDescriptions;
        this.button = button;
    }


    randomizeLunches() {
        document.getElementById("button").addEventListener("click",
            () => {
                lunches.sort(function(a, b) { return 0.5 - Math.random() });
                randomize.innerHTML = meals[0];
            }, false
        );
    }
}

let randomize = document.getElementById("randomize");

export const lunches = new LunchGenerator("../images/pestopasta.png", "Sage & Walnut Pesto Pasta with Sweet Potatoes", "Woodsy and nutty, this unique sage and walnut pesto is the star of this dish. The pasta and sweet potatoes play perfectly with the sauce — it’s so flavorful and comforting.", 'Pick your Lunch!')

// const meals = [
//     { image: "../images/bltpasta.png", title: "BLT Pasta with Shrimp", description: "There’s a reason BLTs are loved by just about everyone. But when you’re looking for something a little more creative, this twist on the classic sandwich delivers. Simply substitute pasta for bread, and spinach for lettuce, then throw in quick-cooking shrimp to add more protein, and dinner is on the table." },
//     { image: "../images/ratatouille.png", title: "Ratatouille", description: "A popular Provençal dish, ratatouille [ra-tuh-TOO-ee] blends and simmers eggplant, tomatoes, zucchini, and more into a delectable stew-like concoction. With protein and fiber-rich chickpeas added, this becomes an even better meatless meal." },
//     { image: "../images/carnitas-tacos.png", title: "Carnitas-Style Turkey Tacos", description: "The king of the taco cart — carnitas — gives leftover turkey new life with this simple yet flavor-packed dish." },
//     { image: "../images/pestopasta.png", title: "Sage & Walnut Pesto Pasta with Sweet Potatoes", description: "Woodsy and nutty, this unique sage and walnut pesto is the star of this dish. The pasta and sweet potatoes play perfectly with the sauce — it’s so flavorful and comforting." },
//     { image: "../images/cajungrilledshrimp.png", title: "Cajun Grilled Shrimp", description: "The flavors of New Orleans take a front seat in these Cajun Grilled Shrimp. Cajun cooking is bold and known for its hefty dose of seasoning. A simple spice paste adds flavor to shrimp, a staple of Cajun cuisine." },
//     { image: "../images/green-gazpacho.png", title: "Green Gazpacho", description: "With veggies so abundant this time of year, gazpacho [gahz-PAH-choh], a traditional cold Spanish summertime soup, is perfect when you’re trying to tame the heat of the day. When you think gazpacho, the classic red tomato variety probably comes to mind. But white and green are also variations. This green gazpacho skips the tomato and uses ingredients typical of white gazpacho, like cucumber, grapes, bread, and almonds, plus avocado, jalapeño, parsley, and cilantro, for a refreshing flavor and color." },
//     { image: "../images/pimento-grilled-cheese.png", title: "Pimento Grilled Cheese", description: "What goes with tomato soup? Grilled cheese, of course. But no ordinary one will do. Pimento cheese takes this menu down south for a grilled cheese like no other." },
//     { image: "../images/steak-stuffed-avocados.png", title: "Steak-Stuffed Avocados", description: "Load up on keto-friendly ingredients, like avocado, cheese, steak, and bacon, to make these delicious and nutritious Steak-Stuffed Avocados." },
//     { image: "../images/steak-quinoa-bowl.png", title: "Steak & Quinoa Bowl", description: "This healthy Steak & Quinoa Bowl is packed with vegetables and tossed with a balsamic mustard vinaigrette that melds this dish together. Plus, it's colorful and a real feast for the eyes." },
//     { image: "../images/roasted-salmon.png", title: "Roasted Salmon with Asparagus and Parsley Salad", description: "This salmon recipe features just a few simple ingredients but imparts big, fresh flavor. Top the roasted salmon with asparagus, fresh parsley, and a paleo-friendly salad dressing." }
// ]