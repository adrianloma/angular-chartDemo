angular.module("appName", ["chart.js"])
.controller("nameOfController", function () {
	var controllerScope = this;

    controllerScope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    controllerScope.data = [300, 500, 100, 40, 120];

	var currType = 0;

	var typeArray = ['PolarArea', 'Pie', 'Doughnut'];

	controllerScope.type = 'PolarArea';
    controllerScope.toggle = function () {
		currType = (currType + 1) % typeArray.length;
		controllerScope.type = typeArray[currType];
     };


	controllerScope.randomize = function () {
		for(i = 0; i < controllerScope.data.length; i++) {
			controllerScope.data[i]  = 100 * Math.random()
		 }
	}
});