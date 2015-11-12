angular.module("appName", ["chart.js"])
.controller("nameOfController", function () {
	var controllerScope = this;

  controllerScope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  controllerScope.series = ['Series A', 'Series B'];
  controllerScope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  controllerScope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});