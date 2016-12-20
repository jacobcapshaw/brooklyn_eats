angular.module('reviewApp').component('reviewList', {
  templateUrl: 'review-list/review-list.template.html',
  controller: function ReviewListController($http) {
    var self = this;
    self.orderProp = 'date';

    $http.get('api/reviews').then(function (response) {
      self.reviews = response.data;
    });
  }
});

