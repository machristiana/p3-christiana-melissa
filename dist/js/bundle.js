(()=>{"use strict";const e=new class{constructor(e,t){this.pageTitle=e,this.pageLogoSrc=t}}("Easy 30 Minute Lunches","../images/logo.png"),t=new class{constructor(e,t){this.copyright=e,this.developer=t}}("Copyright 2021","Developed by Melissa Christiana"),i=new class{constructor(e,t,i,a){this.foodImages=e,this.foodTitle=t,this.foodDescriptions=i,this.button=a}randomizeLunches(){const e=[{image:"../images/bltpasta.png",title:"BLT Pasta with Shrimp",description:"There’s a reason BLTs are loved by just about everyone. But when you’re looking for something a little more creative, this twist on the classic sandwich delivers. Simply substitute pasta for bread, and spinach for lettuce, then throw in quick-cooking shrimp to add more protein, and dinner is on the table."},{image:"../images/ratatouille.png",title:"Ratatouille",description:"A popular Provençal dish, ratatouille [ra-tuh-TOO-ee] blends and simmers eggplant, tomatoes, zucchini, and more into a delectable stew-like concoction. With protein and fiber-rich chickpeas added, this becomes an even better meatless meal."},{image:"../images/carnitas-tacos.png",title:"Carnitas-Style Turkey Tacos",description:"The king of the taco cart — carnitas — gives leftover turkey new life with this simple yet flavor-packed dish."},{image:"../images/pestopasta.png",title:"Sage & Walnut Pesto Pasta with Sweet Potatoes",description:"Woodsy and nutty, this unique sage and walnut pesto is the star of this dish. The pasta and sweet potatoes play perfectly with the sauce — it’s so flavorful and comforting."},{image:"../images/cajungrilledshrimp.png",title:"Cajun Grilled Shrimp",description:"The flavors of New Orleans take a front seat in these Cajun Grilled Shrimp. Cajun cooking is bold and known for its hefty dose of seasoning. A simple spice paste adds flavor to shrimp, a staple of Cajun cuisine."},{image:"../images/green-gazpacho.png",title:"Green Gazpacho",description:"With veggies so abundant this time of year, gazpacho [gahz-PAH-choh], a traditional cold Spanish summertime soup, is perfect when you’re trying to tame the heat of the day. When you think gazpacho, the classic red tomato variety probably comes to mind. But white and green are also variations. This green gazpacho skips the tomato and uses ingredients typical of white gazpacho, like cucumber, grapes, bread, and almonds, plus avocado, jalapeño, parsley, and cilantro, for a refreshing flavor and color."},{image:"../images/pimento-grilled-cheese.png",title:"Pimento Grilled Cheese",description:"What goes with tomato soup? Grilled cheese, of course. But no ordinary one will do. Pimento cheese takes this menu down south for a grilled cheese like no other."},{image:"../images/steak-stuffed-avocados.png",title:"Steak-Stuffed Avocados",description:"Load up on keto-friendly ingredients, like avocado, cheese, steak, and bacon, to make these delicious and nutritious Steak-Stuffed Avocados."},{image:"../images/steak-quinoa-bowl.png",title:"Steak & Quinoa Bowl",description:"This healthy Steak & Quinoa Bowl is packed with vegetables and tossed with a balsamic mustard vinaigrette that melds this dish together. Plus, it's colorful and a real feast for the eyes."},{image:"../images/roasted-salmon.png",title:"Roasted Salmon with Asparagus and Parsley Salad",description:"This salmon recipe features just a few simple ingredients but imparts big, fresh flavor. Top the roasted salmon with asparagus, fresh parsley, and a paleo-friendly salad dressing."}];return e[Math.floor(Math.random()*e.length)]}showResults(){let e=document.getElementById("image"),t=document.getElementById("title"),i=document.getElementById("description");document.getElementById("button").addEventListener("click",(()=>{let a=this.randomizeLunches();e.src=a.image,t.innerHTML=a.title,i.innerHTML=a.description,document.getElementById("image").style.border="white solid 4px",document.getElementById("figcaption").style.backgroundColor="#384c65",window.matchMedia("(min-width: 600px)").matches?document.getElementById("button2").style.marginTop="0":document.getElementById("button2").style.marginTop="auto",window.matchMedia("(min-width: 1000px)").matches?(document.getElementById("container").style.margin="0 auto",document.getElementById("container").style.maxWidth="80%"):(document.getElementById("container").style.margin="0",document.getElementById("container").style.maxWidth="100%")}))}}(" "," "," ","Pick your Lunch!");new class{constructor(){this.renderTemplate(),i.showResults()}renderTemplate(){const a=`\n            <body>\n                <div class="site">\n                    <header>\n                        <div class="logo">\n                            <img src="${e.pageLogoSrc}" alt="Logo" title="Logo">\n                        </div>\n                        <h1>${e.pageTitle}</h1>\n                    </header>\n                    <main id="container" class="site-content">\n                        <figure id="randomize">\n                            <div>\n                                <img id="image" src="${i.foodImages}" alt="Lunch Image" title="Lunch Image">\n                            </div>\n                            <figcaption id="figcaption">\n                                <h2 id="title">${i.foodTitle}</h2>\n                                <p id="description">${i.foodDescriptions}</p>\n                            </figcaption>\n                        </figure>\n                        <div id="button2" class="button">\n                            <a href="#" id="button">${i.button}</a>\n                        </div>\n                    </main>\n                    <footer>\n                        <p>${t.copyright}</p>\n                        <p>${t.developer}</p>\n                    </footer>\n                </div>\n            </body>\n        `;document.body.innerHTML=a}}})();