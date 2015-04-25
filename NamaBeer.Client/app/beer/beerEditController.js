(function () {
	'use strict';

	angular
    .module('nama')
    .controller('BeerEditController', BeerEditController);

	BeerEditController.$inject = ['toastr', '$modalInstance', 'state'];

	function BeerEditController(toastr, $modalInstance, state) {

		var vm = this;
		vm.title = state.title;
		vm.beer = state.beer;
		
		vm.cancel = function (form) {

			$modalInstance.dismiss();
			delete state.originalBeer;
		};

		vm.save = function () {

			vm.beer.$update({ id: vm.beer.id },
				function (data) {

					toastr.success(vm.beer.name + " successfully updated.");
					$modalInstance.close(vm.beer);
				}
			);

			delete state.originalBeer;
		};
	}
}());