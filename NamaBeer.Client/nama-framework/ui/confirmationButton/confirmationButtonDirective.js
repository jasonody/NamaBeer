(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaConfirmationButton', confirmationButton);

	confirmationButton.$inject = ['$timeout'];

	function confirmationButton($timeout) {

		return {
			restrict: 'AE',
			replace: true,
			transclude: true,
			templateUrl: '/nama-framework/ui/confirmationButton/confirmationButton.html',
			scope: {
				click: '&click'
			},
			link: function (scope, element, attributes) {

				var timeout;

				scope.showConfirmation = false;
				scope.clicked = function () {

							if (scope.showConfirmation) {
								$timeout.cancel(timeout);

								scope.click();
							} else {

								var delay = parseInt(attributes.waitPeriod) || 3;

								timeout = $timeout(function () {

									switchButtonState(scope, element, attributes);
								}, delay * 1000);
							}

							switchButtonState(scope, element, attributes);
				};

				if (attributes.primaryStyle) {
					element[0].classList.add(attributes.primaryStyle);
				}
			}
		};

		function switchButtonState(scope, element, attributes) {

			if (scope.showConfirmation) {

				if (attributes.confirmStyle) {
					element[0].classList.remove(attributes.confirmStyle);
				}
				if (attributes.primaryStyle) {
					element[0].classList.add(attributes.primaryStyle);
				}
			} else {
				if (attributes.primaryStyle) {
					element[0].classList.remove(attributes.primaryStyle);
				}
				if (attributes.confirmStyle) {
					element[0].classList.add(attributes.confirmStyle);
				}
			}

			scope.showConfirmation = !scope.showConfirmation;
		}
	}

}());