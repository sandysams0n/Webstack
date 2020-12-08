angular.module("myapp", ['ngRoute'])
         .config(function($routeProvider) {
            $routeProvider.when('/', {
               templateUrl: 'views/home.html'
            }).when('/one', {
               templateUrl: 'views/one.html',
               controller:'onectrl'
            }).when('/one/:first/:last', {
               templateUrl: 'views/one.html',
               controller:'onectrl'
             }).when('/two', {
                  templateUrl: 'views/two.html'
            });
         })
         .controller('mainController',function($scope){
            $scope.titles="Home Page"

         })
         .controller('onectrl',function($scope,$routeParams) {
            $scope.message="Hello Welcome"
            if($routeParams.first&&$routeParams.last)
         {
            $scope.person={
               first:$routeParams.first,
               last:$routeParams.last,
            };
         }
         })