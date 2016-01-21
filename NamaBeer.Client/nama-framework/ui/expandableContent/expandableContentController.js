(function () {
	'use stict';

	angular
		.module('nama.ui')
		.controller('ExpandableContentController', ExpandableContentController);

	ExpandableContentController.$inject = [];

	function ExpandableContentController() {

		var vm = this;
		vm.expanded = false;

		vm.toggle = function () {

			vm.expanded = !vm.expanded;
		};
	}
}());