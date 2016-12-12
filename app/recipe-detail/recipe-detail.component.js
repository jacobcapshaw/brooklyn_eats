angular.module('recipeDetail').component('recipeDetail', {
    templateUrl: 'recipe-detail/recipe-detail.template.html',
    controller: ['$http', '$routeParams', '$scope',
        function RecipeDetailController($http, $routeParams, $scope) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
            console.log($routeParams)
            $http.get('/api/recipes/' + $routeParams.recipeId).then(function (response) {
                self.recipe = response.data;
                self.setImage(self.recipe.images[0]);
            });

            $scope.addComment = function () {
                self.recipe.comments.unshift($scope.comment);
                $http.put('/api/recipes/' + self.recipe._id, self.recipe)
                    .success(function () {
                        $scope.commentForm.$setPristine();
                        $scope.commentForm.$setUntouched();
                        // $scope.recipe.comments = data.recipe.comments
                    })
            };
        }
    ]
});
