(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaConfirmationButton', confirmationButton);

	confirmationButton.$inject = [];

	function confirmationButton() {

		return {
			restrict: 'AE',
			replace: true,
			transclude: true,
			templateUrl: '/nama-framework/ui/confirmationButton/confirmationButton.html',
			scope: {
				click: '&click'
			},
			link: function (scope, element, attributes) {

				scope.showConfirmation = false;
				if (attributes.primaryStyle) {
					element[0].classList.add(attributes.primaryStyle);
				}

				element.on('click', function (e) {

					e.stopPropagation();
					e.preventDefault();

					scope.$apply(function () {

						var timeout;
						//reset after time interval
						if (scope.showConfirmation) {
							if (attributes.confirmStyle) {
								element[0].classList.remove(attributes.confirmStyle);
							}
							if (attributes.primaryStyle) {
								element[0].classList.add(attributes.primaryStyle);
							}
							scope.click();
						} else {
							if (attributes.primaryStyle) {
								element[0].classList.remove(attributes.primaryStyle);

							}
							if (attributes.confirmStyle) {
								element[0].classList.add(attributes.confirmStyle);
							}
						}

						scope.showConfirmation = !scope.showConfirmation;
					});
				});
			}
		};
	}

}());