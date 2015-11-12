angular.module("appName", [])
	.controller("nameOfController", function() {
		var controllerScope = this;
		controllerScope.message = "";

        controllerScope.save = function() {
            alert("Note Saved");
        };
        controllerScope.clear = function() {
            controllerScope.message = "";
        };


	});