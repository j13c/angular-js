app3.controller('navegacionControl',function($scope,$location){
    
    $scope.esActivo = function(rutaActual){
        return rutaActual === $location.path(); 
    } 

});  