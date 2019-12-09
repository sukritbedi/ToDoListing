var app = angular.module("myApp", []);

app.controller("loginController", function($scope, $http, $window){
    $scope.loginQuery = function(uname, pass){
        if(uname==="" || pass==="" || uname == null || pass==null){
            alert("All fields are necessary.")
        } else {
            console.log(uname, pass);
            $http({
                method: 'POST',
                url: 'http://localhost:8000/login',
                data: {'username':$scope.uname, 'password':$scope.pswd}
            })
            .success(function(data){
                console.log(data);
            })
        }
    }
})

app.controller("mainPage", function($scope, $http, $window) {
    $scope.defaultV = true;
    $scope.addItemV = false;

    $scope.isOwner = true;

    $scope.items = null;

    $scope.addItemView = function(){
        $scope.defaultV = false;
        $scope.addItemV = true;
    }

    $scope.removeTask = function(itemId){
        
    }
})