angular.module('reviewDetail').component('reviewDetail', {
    templateUrl: 'review-detail/review-detail.template.html',
    controller: ['$http', '$routeParams', '$scope',
        function ReviewDetailController($http, $routeParams, $scope) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
            console.log($routeParams)
            $http.get('/api/reviews/' + $routeParams.reviewId).then(function (response) {
                self.review = response.data;
                console.log(response.data);
                self.setImage(self.review.image);
            });

            $scope.addComment = function () {
                var comment = {
                    text: $scope.comment,
                    date: new Date().toDateString()
                }
                self.review.comments.unshift(comment);
                $http.put('/api/reviews/' + self.review._id, self.review)
                    .success(function () {
                        $scope.comment = '';
                        $scope.commentForm.$setPristine();
                        $scope.commentForm.$setUntouched();
                        // $scope.recipe.comments = data.recipe.comments
                    })
            };
        }
    ]
});
