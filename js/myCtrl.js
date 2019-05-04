app.controller("myCtrl",function($scope){
    $scope.fisrtName = "John";
    $scope.lastName  = "Doe";
    $scope.firstName2 = "Jean";
    $scope.lastName2  = "Carlos"
});

app2.controller("ctrlForm",function($scope){

    $scope.validationEmail = function(){
        var str = $scope.myText;
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(str)){
            $scope.isValid=true;
        } else {
            $scope.isValid=false; 
        }       
        console.log(isValid);       
    }
});
