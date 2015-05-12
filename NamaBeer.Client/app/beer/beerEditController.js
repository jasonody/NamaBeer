(function () {
	'use strict';

	angular
    .module('beer')
    .controller('BeerEditController', BeerEditController);

	BeerEditController.$inject = ['toastr', '$modalInstance', 'state', 'Beer'];

	function BeerEditController(toastr, $modalInstance, state, Beer) {

		var vm = this;
		vm.title = state.title;
		vm.beer = state.beer;
		
		vm.cancel = function () {

			$modalInstance.dismiss();
		};

		vm.save = function () {

			if (vm.beer.id) {
				vm.beer.$update({ id: vm.beer.id },
					function (data) {

						toastr.success(vm.beer.name + " successfully updated.");
						$modalInstance.close(vm.beer);
					}
				);
			} else {
				vm.beer.$save(function (data) {

					toastr.success(vm.beer.name + " successfully added.");
					$modalInstance.close(vm.beer);
				});
			}
		};
	}
}());