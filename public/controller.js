var app = angular.module('myapp', []);

app.controller('myctrl',function($scope,$http){
var web = {};
$scope.show = function(){
    console.log($scope.url);
    console.log($scope.name);
    web.url = $scope.url;
    web.name = $scope.name;
    create(web);



}


    create = function(data){
    return   $http.post('/api/management',data);

}

});

