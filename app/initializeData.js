var Recipe = require('./models/recipe');
var Review = require('./models/review');

module.exports = function initializeData() {
  Recipe.remove({}, addRecipes);
  Review.remove({}, addReviews);
}

function addReviews(err) {
  Review.create({
    description: "Friendly, cozy, and oh so tasty",
    "cuisine": "Asian",
    "cost": "$$-$$$",
    "region": "Park Slope",
    "name": "Matsu",
    "address1": "1258 Flatbush Ave",
    "address2": "Brooklyn, NY 11238",
    "map": "https://www.google.com/maps/place/1258+Flatbush+Ave,+Brooklyn,+NY+11226/@40.6394387,-73.9571592,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25b492251baf9:0x1fbf5bb83e4b030b!8m2!3d40.6394387!4d-73.9549705",
    "phone": "(718) 767-1111",
    "content": ["If there's one Asian cuisine we truly love, it's sushi (although dim sum comes a close second). Prepared correctly, sushi can be a work of sublime art to both the eyes and the tongue. There's nothing quite like the taste of a fresh piece of suzuki (sea bass) or salmon artfully combined with special rice and a hint of wasabi (Japanese horseradish). \"Fresh fish in Brooklyn?\" we hear you asking. Absolutely. There are several very good sushi restaurants in the area, but for our money, Matsu is at the head of the pack. It's so good, it beats out most of the Brooklyn sushi places we've tried.",
    "On a recent visit, we checked out the specials and were delighted to see that escolar, a mild white fish, was available. The toro, on the other had, was sold out, so we had to put it off until another time. We ordered a sampling of nigiri (escolar, alabacore, suzuki, and smoked salmon), a couple of maki rolls, two bowls of miso soup, and gyoza (small dumplings steamed and then pan-fried). While we waited, we took a look around at the small dining room, which can seat about 30 people without making them feel at all cramped; another ten or so seats are available at the sushi bar along one side of the dining room. Between the intimate feel of the room and its subtle decoration, we felt comfortable right away.",
    "The miso came out first, and was quite good, hot and pungent, perfect for a cool evening or whenever you're feeling under the weather. The gyoza followed soon thereafter, and were nicely prepared, warm and soft without being too greasy or mushy. The meal really got underway, though, when our sushi arrived. Each nigiri portion featured a generous slice of fish on top of perfectly-sized rice ball, hand-made and formed by the chefs. One of the keys to nigiri is the wasabi smear between the rice and fish: too much, and it overpowers everything else; too little, and the tastes feel bland. Happily, every one of our nigiri pieces had exactly the right amount of wasabi to add a subtle zing to every mouthful. The maki rolls were also nicely prepared, with an appropriate balance of ingredients.",
    "For dessert, we decided to order strawberry mochi balls, which are small spheres of ice cream surrounded by a glutinous rice coating. Our order came out with the balls cut in half, which was a particularly nice touch since it made the dish easier to share. We ended the evening with some sweet sake recommended to us by our server—a perfect note to close out the meal.",
    "Husband-and-wife team Scott and Brenda Kim, who opened up Matsu in late 2000, are there almost every day of the week and help make every customer feel at home. When we returned on a later night, we were immediately recognized and greeted almost like family. The servers generally keep a close eye on the tables, which is one benefit of the limited seating. Scott is often behind the sushi bar, tending to orders himself, or else in the kitchen doing the same. Brenda, as hostess, oversees the servers and seating with efficiency and charm.",
    "If you're looking for a good Japanese experience but can't foot the bill for a flight to Tokyo, then Matsu is an excellent backup plan. We'll be back again soon."],
    "quote": "It's so good, it beats out most of the Brooklyn sushi places we've tried.",
    "image": "https://s19.postimg.org/kg26t6r0j/sushi_a.jpg",
    "comments": []
  });

  Review.create({
    description: "An oyster bar that has expanded its menu but preserved its French Quarter atmosphere",
    "cuisine": "French",
    "cost": "$$-$$$",
    "region": "Williamsburg",
    "name": "Maison Premiere",
    "address1": "298 Bedford Ave",
    "address2": "Brooklyn, NY 11211",
    "map": "https://www.google.com/maps/place/Maison+Premi%C3%A8re/@40.7142571,-73.9616224,15z/data=!4m5!3m4!1s0x0:0xcb55e54de2d99b36!8m2!3d40.7142571!4d-73.9616224",
    "phone": "(347) 335-0446",
    "content": ["The tight room is astonishingly loud, verging on raucous, but still the waiters murmur, hands behind their backs.",
    "They are better dressed than the diners, in black vests and narrow ties, and never break character. A porcelain cloche is lifted, a sauce poured from a tiny jug, cloche after cloche, jug after jug. At first this prim choreography seems tongue-in-cheek, then earnest, and finally almost silly — and all the more charming for it, like much of the orchestrated seduction that is a night at Maison Premiere.",
    "When it opened in Williamsburg, Brooklyn, two and a half years ago, Maison Premiere was an exercise in mood (louche) and epoch (French Quarter circa the 1890s). Primarily a bar, it served little more than absinthe and oysters. This was enough. Everyone wanted in.",
    "Apparently, the owners, Joshua Boissy and Krystof Zizka, were not content with the neighborhood’s nightly adulation. Perhaps they want to be loved for more than good looks. Last summer they built a kitchen in the basement and hired Jared Stafford-Hill, formerly at Adour Alain Ducasse, to introduce more elaborate but still seafood-focused small plates. Since his departure in April, his sous-chef, Lisa Giffen (another Adour alum), has further refined and expanded the menu.",
    "The food is impressionistic, best appreciated as a series of lovely, fleeting moments rather than the sustained arc that typically constitutes a meal. From the raw bar come thin slices of sea scallop with rosy pickled rhubarb and a drift of shaved horseradish ice, hot and cold at once. Razor clam, sweet and almost squidlike in texture, is punctuated by crisp, clean radish. A spoonful of lobster dressed with mayonnaise, celery and tarragon, anchoring a cracked tail shell, suggests a stolen bite from a New England lobster roll, with buttered bread crumbs in lieu of the roll.",
    "Nothing is minutiae here. An exacting microdice of pickled beets, alongside shavings of cured egg yolk, smoked caviar and dots of crème fraîche, turns Arctic char into an almost Russian geometry of creaminess and saltiness. Spanish mackerel is charred before being steeped in an escabeche of grapefruit, orange and orange zest. Buttery daurade gets sharp diacritics of pickled gooseberries and tarragon.",
    "At times effort outstrips effect: peekytoe crab is overburdened by saffron rouille and olive tapenade; sea scallops grow soupy in a lethargic Grenobloise of browned butter and capers. Louisiana-style crayfish on a toasted baguette is appropriately equipped with horseradish rémoulade and a long-simmered red roux, but it lacks gusto and heft.",
    "The large plates still bear the marks of a miniaturist. Impeccably round potato orbs, carved out with a melon baller, are loaded into a chowder poured tableside over turbot and clams basted in seaweed butter. Black cod is half-roasted, half-steamed in foil, scattered with pliant, raw green almonds and finished with a grassy nage made with Dolin’s dry vermouth. Rabbit is a progression from hind leg (braised and breaded) to loin and tenderloin (torqued around a liver farce, or stuffing) to a rack of ribs so tiny and doll-like it may give you pause. (It is the best part.)",
    "A few practical notes: Do not attempt to enter Maison Premiere from 4 to 7 p.m., when many of the immaculate oysters are $1 each and the crowd is restless. Later you will still wait, but at least with hope. Better yet, make a reservation for the $95 tasting menu, which for a party of two begins with a daunting two-tiered tower of oysters and crustaceans and ends with a silver tray of five desserts, four of which I would have happily traded for more of the perfect cannelés, with custard hearts and chewy exteriors just shy of burned.",
    "If you are offered a table in the garden, the angels are at your side. White pebbles catch underfoot. Above, a trellis is strung with globe lights that hint at rather than provide illumination. Vines creep. From inside comes the occasional clash and roar, but no one pays any mind. Let the world continue without us."],
    "quote": "The food is impressionistic, best appreciated as a series of lovely, fleeting moments rather than the sustained arc that typically constitutes a meal.",
    "image": "https://s19.postimg.org/ckrnedhdv/maison.jpg",
    "comments": []
  });
};

function addRecipes(err) {
  Recipe.create({
    "title": "Guacamole",
    "cuisine": "Mexican",
    "date": "2016-10-01",
    "description": "Guacamole is definitely a staple of Mexican cuisine. Even though Guacamole is pretty simple, it can be tough to get the perfect flavor - with this authentic Mexican guacamole recipe, though, you will be an expert in no time.",
    "mainImageUrl": "https://s19.postimg.org/kp7zkb877/guacamole.png",
    "images": [
      "https://s19.postimg.org/kp7zkb877/guacamole.png",
      "https://s19.postimg.org/y2b4mxd1f/guacamole_2.jpg",
      "https://s19.postimg.org/63gyw2ber/guacamole_3.jpg",
      "https://s19.postimg.org/7wjvkdwlf/guacamole_4.jpg"
    ],
    "ingredients": [
      "3 avocados - peeled, pitted, and mashed",
      "1 lime, juiced",
      "1 teaspoon salt",
      "1/2 cup diced onion",
      "3 tablespoons chopped fresh cilantro",
      "2 roma (plum) tomatoes, diced",
      "1 teaspoon minced garlic",
      "1 pinch ground cayenne pepper (optional)"
    ],
    "instructions": [
      "In a medium bowl, mash together the avocados, lime juice, and salt. Mix in onion, cilantro, tomatoes, and garlic. Stir in cayenne pepper. Refrigerate 1 hour for best flavor, or serve immediately."
    ],
    "comments": []
  });

  Recipe.create({
    "title": "Lasagna",
    "cuisine": "Italian",
    "date": "2013-09-01",
    "description": "Lasagna noodles piled high and layered full of three kinds of cheese to go along with the perfect blend of meaty and zesty, tomato pasta sauce all loaded with herbs.",
    "mainImageUrl": "https://s19.postimg.org/syjuyq1xf/lasagna_1.png",
    "images": [
      "https://s19.postimg.org/syjuyq1xf/lasagna_1.png",
      "https://s19.postimg.org/6b4lskmdf/lasagna_2.png",
      "https://s19.postimg.org/w7ya56q0z/lasagna_3.png",
      "https://s19.postimg.org/wlzm4sa4j/lasagna_4.png"
    ],
    "ingredients": [
      "1 pound sweet Italian sausage",
      "3/4 pound lean ground beef",
      "1/2 cup minced onion",
      "2 cloves garlic, crushed",
      "1 (28 ounce) can crushed tomatoes",
      "2 (6 ounce) cans tomato paste",
      "2 (6.5 ounce) cans canned tomato sauce",
      "1/2 cup wate",
      "2 tablespoons white suga",
      "1 1/2 teaspoons dried basil leaves",
      "1/2 teaspoon fennel seeds",
      "1 teaspoon Italian seasoning",
      "1 tablespoon salt",
      "1/4 teaspoon ground black pepper",
      "4 tablespoons chopped fresh parsley",
      "12 lasagna noodles",
      "16 ounces ricotta cheese",
      "1 egg",
      "1/2 teaspoon salt",
      "3/4 pound mozzarella cheese, sliced",
      "3/4 cup grated Parmesan cheese"
    ],
    "instructions": [
      "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.",
      "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.",
      "Preheat oven to 375 degrees F (190 degrees C).",
      "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.",
      "Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving."
    ],
    "comments": []
  });

  Recipe.create({
    "title": "Carnitas",
    "cuisine": "Mexican",
    "date": "2016-12-11",
    "description": "This Mexican carnitas recipe is authentic braised and fried pork that's fall-apart-tender pork goodness ready for tacos.",
    "mainImageUrl": "https://s19.postimg.org/slnvesu9v/carnitas.jpg",
    "images": [
      "https://s19.postimg.org/slnvesu9v/carnitas.jpg",
      "https://s19.postimg.org/6y3ii3j9f/ingredients.jpg",
      "https://s19.postimg.org/ghi98od37/pork.jpg",
      "https://s19.postimg.org/t0z57tg77/cutPork.jpg",
      "https://s19.postimg.org/odt361sub/cookedPork.jpg"
    ],
    "ingredients": [
      "3 pounds boneless pork shoulder or pork butt, cut into 2-inch cubes",
      "1/2 cup orange juice",
      "1/4 cup lime juice (from about 2 to 3 limes)",
      "4 cloves garlic, peeled and crushed",
      "1 teaspoon ground cumin",
      "1 teaspoon Kosher salt, plus more to taste"
    ],
    "instructions": [
      "Place the pork in a large Dutch oven or heavy pot. Add the orange juice, lime juice, garlic, cumin, salt and enough water to just barely cover the meat. Bring the pot to a boil and then reduce the heat to a simmer. Simmer uncovered for two hours. Don’t touch the meat.",
      "After two hours, increase the heat to medium-high and while occasionally stirring and turning the pieces, continue to cook for about 45 minutes, or until all of the liquid has evaporated, leaving only the rendered pork fat. Let it sizzle in this fat long enough to brown at the edges, turning pieces gently (they’ll be eager to fall apart), only as needed.",
      "When pork has browned on both sides, it’s ready. Adjust seasonings to taste and serve on warmed tortillas with fixings."
    ],
    "comments": []
  });
};
