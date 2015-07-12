(function () {
	'use strict';

	angular
		.module('nama.ui')
		.directive('namaFormerrors', namaFormerrors);

	namaFormerrors.$inject = ['$compile', '$timeout'];

	function namaFormerrors($compile, $timeout) {

		return {
			restict: 'AE',
			require: '^form',
			link: function (scope, element, attributes, controller) {
				
				$timeout(function () {

					var inputName = attributes.for;

					if (inputName === undefined) {
						console.log(element);
						var input = element.parent()[0].querySelector('input, textarea, select');
						console.log(input);
						inputName = input.getAttribute('name');
					}

					var form = controller;
					var formName = controller.$name;

					var markup = '<div class="help-block"' +
						'	ng-messages="' + formName + '.' + inputName + '.$error"' +
						'	ng-show="' + formName + '.' + inputName + '.$dirty"' +
						'	ng-messages-include="nama-framework/ui/forms/errorMessages.html">' +
						'</div>';

					element.append($compile(markup)(scope));
				}, 100);
			}
		};
	}

}());