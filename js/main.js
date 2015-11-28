var app = angular.module('mainApp', []);

app.factory('Instagram', ['$http',
	function($http) {
		var base = "https://api.instagram.com/v1";
		var clientId = '8f022e4fd9304cdb8dfd7a7d0606b208';
    return {
			'get': function(hashtag, count, endpoint) {
				var request = '/tags/' + hashtag + endpoint;
				var url = base + request;
				var config = {
					'params': {
						'client_id': clientId,
						'count': count,
						'callback': 'JSON_CALLBACK'
					}
				};
				return $http.jsonp(url, config);
			}
		};
	}
]);

app.controller('picController', ['$scope', 'Instagram',
	function($scope, Instagram) {
    $scope.hashtag='Flowers'

		Instagram.get($scope.hashtag,20,'/media/recent').success(function(response) {

      $scope.data = response.data
      console.log(response)
      console.log(response.pagination.next_url)
      //instagramSuccess($scope.example1, response);
      //console.log($scope.example1)
		});
    Instagram.get($scope.hashtag,'','').success(function(response) {
      console.log(response)
      $scope.count = response.data.media_count
    });


	}
]);
