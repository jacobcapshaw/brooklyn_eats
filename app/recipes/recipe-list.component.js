angular.module('recipeApp').component('recipeList', {
    templateUrl: 'recipes/recipe-template.html',

    controller: function RecipeListController() {
        this.recipes = [
            {
                name: 'recipe1309',
                title: 'Mexican',
                date: '2013-09-01',
                description: 'From tacos, burritos, and fajitas to regional specialties, our extensive library of Mexican recipes and food ideas includes all of your favorites.',
                image: 'mexican.jpg'
            },

            {
                name: 'recipe1404',
                title: 'American',
                date: '2014-04-15',
                description: 'Explore the distinct regional cuisines of America, including New England, the Heartland, the South, Northwest, Southwest and Louisiana.',
                image: 'american.jpg'
            },

            {
                name: 'recipe1210',
                title: 'Asian',
                date: '2012-10-01',
                description: 'These favorite Asian recipes offer dishes from many diverse cuisines, from Japanese sushi to Thai curries and Chinese stir-frys to Vietnamese pho.',
                image: 'asian.jpg'
            },

            {
                name: 'recipe1810',
                title: 'French',
                date: '2012-10-20',
                description: 'You love the taste of French dishes—and cooking them yourself can be a lot easier than you think. Check out these authentic recipes, from soups to desserts.',
                image: 'french.jpg'
            },

            {
                name: 'recipe1811',
                title: 'Middle Eastern',
                date: '2012-10-20',
                description: 'Find delicious and authentic Middle-Eastern food recipes that will make you feel as if you are vacationing in the Middle East.',
                image: 'middle-eastern.jpg'
            },

            {
                name: 'recipe1812',
                title: 'Italian',
                date: '2012-10-20',
                description: 'Authentic Italian recipes, for pastas, pasta sauces, cookies, cakes, main dishes, and more.',
                image: 'lasagne.png'
            }
        ]
    }
});
