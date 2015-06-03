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
				if (attributes.primaryStyle) {
					element[0].classList.add(attributes.primaryStyle);
				}

				element.on('click', function (e) {

					e.stopPropagation();
					e.preventDefault();

					scope.$apply(function () {

						if (scope.showConfirmation) {
							$timeout.cancel(timeout);

							//if (attributes.confirmStyle) {
							//	element[0].classList.remove(attributes.confirmStyle);
							//}
							//if (attributes.primaryStyle) {
							//	element[0].classList.add(attributes.primaryStyle);
							//}

							scope.click();
						} else {
							//if (attributes.primaryStyle) {
							//	element[0].classList.remove(attributes.primaryStyle);
							//}
							//if (attributes.confirmStyle) {
							//	element[0].classList.add(attributes.confirmStyle);
							//}

							timeout = $timeout(function () {

								//if (attributes.confirmStyle) {
								//	element[0].classList.remove(attributes.confirmStyle);
								//}
								//if (attributes.primaryStyle) {
								//	element[0].classList.add(attributes.primaryStyle);
								//}

								//scope.showConfirmation = !scope.showConfirmation;
								switchButtonState(scope, element, attributes);
							}, 3000);
						}

						switchButtonState(scope, element, attributes);

						//scope.showConfirmation = !scope.showConfirmation;
					});
				});
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