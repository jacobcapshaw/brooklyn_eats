var Recipe = require('./models/recipe');

module.exports = function initializeData() {
  var recipes = Recipe.count({}, addRecipes);
}

function addRecipes(err, count) {
  if (err || count > 0) {
    console.log('no recipes added', err, 'count was ' + count);
    return;
  }

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
