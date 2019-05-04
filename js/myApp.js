var app = angular.module("myApp",[]);
var app2 = angular.module("myApp2",[]);
app.directive("myNewDirective", function(){
    return {
        // restrict : "M",
        // replace : true,
        template : "I was made in directive constructor!"
    };
});