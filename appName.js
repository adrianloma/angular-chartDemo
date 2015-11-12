angular.module("appName", [])
	.controller("nameOfController", function() {
		var controllerScope = this;
		controllerScope.message = "";

		controllerScope.messages = [];

        controllerScope.save = function() {
            controllerScope.messages.push( {text:controllerScope.message});
            controllerScope.clear();
        };
        controllerScope.clear = function() {
            controllerScope.message = "";
        };


	});