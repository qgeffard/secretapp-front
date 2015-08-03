/**
 * 
 */

var app = angular.module("JITFRONT", []);

app.controller('RestController', function($scope, $http) {

	$scope.restCall = function() {
		var url = 'http://localhost:8080/JITRest/custom/hello';
		$http.get(url).success(function(data) {
			$scope.rest = data;
		}).error(function(data){
			$scope.rest = 'Error while retrieving data';
		});
	}
});