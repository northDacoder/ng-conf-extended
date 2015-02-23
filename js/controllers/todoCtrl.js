'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - exposes the model to the template and provides event handlers
 */
todomvc.controller('SignupCtrl', ["$scope", "$firebase", function ($scope, $firebase) {
	var fireRef = new Firebase(url);
	$scope.count = 0;

	$scope.addCoder = function () {
		var firstName = $scope.firstName.trim();
		var lastName = $scope.lastName.trim();
		var title = $scope.title.trim();
		var email = $scope.email.trim();

		$scope.coders.$add({
			first: firstName,
			last: lastName,
			email: email,
			title: title
		});

		$scope.firstName = '';
		$scope.lastName = '';
		$scope.title = '';
		$scope.email = '';
	};

	$scope.count++;

	// Bind the todos to the firebase provider.
	$scope.coders = $firebase(fireRef);

}]);

