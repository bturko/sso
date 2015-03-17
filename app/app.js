// create the module and name it ssoApp
var ssoApp = angular.module('ssoApp', ['ngRoute', 'ngAnimate']);

// configure our routes
ssoApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/auth/main.html',
            controller  : 'mainController'
        })

        .when('/auth', {
            templateUrl : 'pages/auth/main.html',
            controller  : 'mainController'
        })

        .when('/registration', {
            templateUrl : 'pages/register/register.html',
            controller  : 'mainController'
        })

        .when('/error', {
            templateUrl : 'pages/register/error.html',
            controller  : 'aboutController'
        })

        .when('/success', {
            templateUrl : 'pages/register/success.html',
            controller  : 'contactController'
        })

        .when('/success2', {
            templateUrl : 'pages/register/success2.html',
            controller  : 'contactController'
        });
});

ssoApp.controller('mainController', function($scope) {
    //$scope.message = 'Everyone come and see how good I look!';
    $scope.toggleHelp = false;
    $scope.toggleLogin = false;
    $scope.toggleExist = false;
    $scope.toggleSMS = false;
});

ssoApp.controller('aboutController', function($scope) {
    //$scope.message = 'Look! I am an about page.';
});

ssoApp.controller('contactController', function($scope) {
    //$scope.message = 'Contact us! JK. This is just a demo.';
});