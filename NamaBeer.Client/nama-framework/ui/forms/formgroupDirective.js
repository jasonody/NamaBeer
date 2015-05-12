(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaFormgroup', namaFormgroup);

	namaFormgroup.$inject = [];

	function namaFormgroup() {

		return {
			restrict: 'A',
			require: '^form',
			link: function (scope, element, attributes, controller) {

				//Add "form-control" class to input tag
				var input = element[0].querySelector('input, textarea, select');
				var type = input.getAttribute('type');
				if (type !== 'checkbox' && type !== 'radio') {
					input.classList.add('form-control');
				}

				//Add "control-label" class to label tag
				var label = element[0].querySelector('label');
				label.classList.add('control-label');

				//Add "form-group" class to encompassing div tag
				element.addClass('form-group');

				//Add "has-error" class to encompassing div tag upon error
				var form = controller;
				scope.$watch(function () {

					if (input.name && form[input.name]) {
						return form[input.name].$invalid && form[input.name].$dirty;
					}
				}, function (hasError) {

					if (hasError) {
						element.addClass('has-error');
					} else {
						element.removeClass('has-error');
					}
				});
			}
		};
	}

}());