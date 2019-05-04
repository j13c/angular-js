app3.controller('inicio',['$scope',function($scope){

    $scope.saludo = "Hola";
    $scope.p1 = "loading...1";
    $scope.p2 = "loading...2";
    $scope.p3 = "loading...3";
    $scope.p4 = "loading...4";
    $scope.valuesP = ["loading...Values1",
        "loading...Values2",
        "loading...Values3",
        "loading...Values4"];
    //segmento
    let Promesa1 = new Promise((resolve,reject) => {
            resolve('primera promesa resuelta');
        });


    let Promesa2 = new Promise((resolve,reject) => {
            setTimeout( () => {
                resolve('Segunda promesa resuelta');
            },3000);
        });


    let Promesa3 = new Promise((resolve,reject) => {
            setTimeout( () => {
                resolve('Tercera promesa resuelta');
            },3600);
        });


    let Promesa4 = new Promise((resolve,reject) => {
            setTimeout( () => {
                resolve('Cuarta promesa resuelta');
            },9000);
        });

    //Segmento
    Promise.all( [Promesa1,Promesa2,Promesa3,Promesa4] )
        .then((values)=>{
            console.log('Los valores son Values',values);
            $scope.valuesP = values;
        });
    //Segmento    
    $scope.statusBtn = function(id){
    
        var boton = document.getElementById(id);
        console.log(boton);
        boton.setAttribute('class','btn btn-warning');

        Promesa1.then((response)=>{
            $scope.p1 = response;
            console.log(response);
            boton.setAttribute('class','btn btn-secondary');
        })
        .catch((error) =>{
            $scope.p1 = error;
        });
        Promesa2.then((response)=>{
            $scope.p2 = response;
            console.log(response);
            boton.setAttribute('class','btn btn-primary');

        })
        .catch((error) =>{
            $scope.p2 = error;
        });
        Promesa3.then((response)=>{
            $scope.p3 = response;
            console.log(response);
            boton.setAttribute('class','btn btn-info');
        })
        .catch((error) =>{
            $scope.p3 = error;
        });
        Promesa4.then((response)=>{
            $scope.p4 = response;
            console.log(response);
            boton.setAttribute('class','btn btn-dark');
        })
        .catch((error) =>{
            $scope.p1 = error;
        })

        boton.setAttribute('class','btn btn-success');            

    };

}]);