angular.module("appName", ["chart.js"])
	.controller("nameOfController", function () {
		var controllerScope = this;
	    controllerScope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
	    controllerScope.data = [300, 500, 100, 40, 120];
	    controllerScope.type = 'PolarArea';

	    controllerScope.toggle = function () {
	  		controllerScope.type = controllerScope.type === 'PolarArea' ? 'Pie' : 'PolarArea';
	    };
	});