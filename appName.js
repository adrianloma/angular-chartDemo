angular.module("appName", ["chart.js"])
.controller("nameOfController", function () {
	var controllerScope = this;

	controllerScope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

	controllerScope.data = [
	 	[100,100,100,100,100,100,100],
	 	[100,100,100,100,100,100,100]
	];

	var n = 0;

	controllerScope.randomize = function () {
		controllerScope.data.forEach(randFunction, n);
		n = 0;
	}

	function randFunction(input, n) {
		var i;
		var arr = [];
		 for(i = 0; i < input.length; i++) {
			arr[i]  = 100 * Math.random()
		 }
		controllerScope.data[n++] = arr;
	}
});