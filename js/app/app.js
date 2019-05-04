var app3 = angular.module( 'navegacion', ['ngRoute'] );

app3.config( [ '$routeProvider' , function($routeProvider){
    // $locationProvider.hashPrefix('templates/');
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    // $locationProvider.html5Mode(false).hashPrefix('');

    $routeProvider.when('/' , {
        templateUrl:'templates/inicio.html',
        controller:'inicio'
    })
    .when('/galeria',{
        templateUrl: 'templates/galeria.html',
        controller:'inicio'

    })
    .when('/mapa',{
        templateUrl: 'templates/mapa.html',
        controller:'inicio'
 
    })
    .when('/contacto',{
        templateUrl: 'templates/contacto.html',
        controller:'inicio'

    })
    .when('/404',{
        templateUrl: 'templates/404.html',
        controller:'inicio'       
    })
    .otherwise({
        redirectTo: '/404'
    })
}]);