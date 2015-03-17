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
            templateUrl : 'pages/register/main.html',
            controller  : 'mainController'
        })

        .when('/error', {
            templateUrl : 'pages/register/error.html',
            controller  : 'aboutController'
        })

        .when('/personal', {
            templateUrl : 'pages/register/personal.html',
            controller  : 'contactController'
        })

});

ssoApp.controller('mainController', function($scope) {
    $scope.toggleHelp = false;
    $scope.toggleLogin = false;
    $scope.toggleExist = false;
    $scope.toggleSMS = false;
    $scope.toggleSMS2 = false;
    $scope.togglePassword = false;
    $scope.show_password = true;
    $scope.show_regBtn = true;
    $scope.toggleWrongCode = false;
    $scope.showCodeProblemLink = false;
    $scope.showCodeProblemBlock = false;
    $scope.showSuccessCreating = false;

    $scope.userLogin = '+380';
    $scope.userPassword = "";
    $scope.showSocials = true;
    $scope.userSmsCode = "";

    $scope.resetAll = function () {
        this.userLogin = '';
        this.userPassword = '';
        this.toggleSMS = false;
        this.toggleSMS2 = false;
        $scope.show_password = true;
        $scope.show_regBtn = true;
        $scope.showCodeProblemLink = false;
        $scope.showCodeProblemBlock = false;
        $("#user-login").attr("placeholder", this.userLogin)
        $("#user-password").attr("placeholder", this.userPassword)
        $("#user-login").prop('disabled', false);
    };

    $scope.register = function(){
        if($scope.userLogin.length < 6){
            $scope.toggleLogin = true;
        }
        else{
            if($scope.userPassword==""){
                $scope.togglePassword = true;
            }
            else{
                if($scope.toggleSMS2==true){
                    if($scope.userSmsCode==""){
                        $scope.toggleWrongCode = true;
                        $scope.showCodeProblemLink = true;
                    }
                    else{
                        $scope.showSuccessCreating=true;
                        $scope.toggleSMS2=false;
                        $scope.show_regBtn = false;
                    }
                }
                else{
                    $scope.toggleSMS = true;
                    $scope.show_password = false;
                    $scope.show_regBtn = false;
                    $("#user-login").attr("disabled", "disabled");
                    //alert(343)
                }

            }
        }

    }

    $scope.get_code = function () {
        this.toggleSMS = false;
        this.toggleSMS2 = true;
        this.show_regBtn = true;
    }

    $scope.helpWithCode = function(){
        alert("Выбрана помощь!");
    }
});

ssoApp.controller('registerController', function($scope) {
    $scope.showSuccessMsg = false;
    $scope.showHelpPopup = false;
    $scope.showWrongLogin = false;
    $scope.showSMSBlock1 = false;
    $scope.showSMSBlock2 = false;
    $scope.showHelpBlock = false;
    $scope.showWrongPhone = false;
    $scope.showWrongSCode = false;
    $scope.showRegBtn = true;

    $scope.regLogin = "+380";
    $scope.smsCodeIn = "";

    $scope.register_newUser = function(){
       if($scope.regLogin!=""){

           console.log($scope.regLogin.length)
           if($scope.regLogin.length <10){
               $("#reg-name").attr("placeholder", "Електронна пошта або номер мобильного")
               $("#reg-name").removeClass("input-info").addClass("input-warning");
               $scope.showWrongPhone = true;
           }
           else{
                $scope.showSMSBlock1 = true;
               $scope.showRegBtn = false;
           }
        }
        else{
           $scope.showWrongLogin = true;
       }

    }
    $scope.returnInput = function(){
        $("#reg-name").attr("placeholder", "+380")
        $("#reg-name").addClass("input-info").removeClass("input-warning");
    }

    $scope.resetAll = function(){
        $scope.showSuccessMsg = false;
        $scope.showHelpPopup = false;
        $scope.showWrongLogin = false;
        $scope.showSMSBlock1 = false;
        $scope.showSMSBlock2 = false;
        $scope.showHelpBlock = false;
        $scope.showWrongSCode = false;
        $scope.showRegBtn = true;

        $scope.regLogin = "+380";
        $scope.smsCodeIn = "";
        $("#reg-name").attr("placeholder", "+380")
        $("#reg-name").addClass("input-info").removeClass("input-warning");
    }

    $scope.get_sms_code = function () {
        $scope.showSMSBlock1 = false;
        $scope.showSMSBlock2 = true;

    }

    $scope.get_enter = function () {
        if ($scope.smsCodeIn == "") {
            $scope.showWrongSCode = true;
            $scope.showHelpBlock = true;
        }
        else{

        }
    }


});

ssoApp.controller('contactController', function($scope) {

});