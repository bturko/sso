// create the module and name it ssoApp
var ssoApp = angular.module('ssoApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

// configure our routes
ssoApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/auth/main.html',
            controller  : 'authController'
        })

        .when('/auth', {
            templateUrl : 'pages/auth/main.html',
            controller  : 'authController'
        })

        .when('/registration', {
            templateUrl : 'pages/register/main.html',
            controller  : 'registerController'
        })

        .when('/success', {
         templateUrl : 'pages/auth/success.html',
         controller  : 'authController'
         })

        .when('/personal', {
            templateUrl : 'pages/register/personal.html',
            controller  : 'registerController'
        })

});

ssoApp.controller('authController', function($scope, $location) {
    $scope.disableLogin = false;
    $scope.showAuthHelp = false;
    $scope.showAuthAlertLogin = false;
    $scope.toggleExist = false;
    $scope.toggleSMS = false;
    $scope.toggleSMS2 = false;
    $scope.showAuthAlertPassword = false;
    $scope.showPassword = true;
    $scope.show_regBtn = true;
    $scope.showLogin = true;
    $scope.showAuthAlertWrongCode = false;
    $scope.showCodeProblemLink = false;
    $scope.showCodeProblemBlock = false;
    $scope.showSuccessCreating = false;
    $scope.showPukBlock = false;
    $scope.showDisposablePassword = true;

    $scope.userLogin = '';
    $scope.userPassword = "";
    $scope.showSocials = true;
    $scope.userSmsCode = "";
    $scope.userPukCode = "";

    $scope.resetAll = function () {
        this.userLogin = '';
        this.userPassword = '';
        this.toggleSMS = false;
        this.toggleSMS2 = false;
        $scope.userPukCode = "";

        $scope.showDisposablePassword = true;
        $scope.showPassword = true;
        $scope.show_regBtn = true;
        $scope.showCodeProblemLink = false;
        $scope.showCodeProblemBlock = false;
        $scope.showPukBlock = false;

        $scope.showAuthHelp = false;
        $scope.showAuthAlertPassword = false;
        $scope.showAuthAlertLogin = false;
        $scope.showAuthAlertWrongCode = false;

        $scope.disableLogin = false;

        $("#user-login").attr("placeholder", 'Електронна пошта або номер мобiльного')
        $("#user-password").attr("placeholder", 'Ваш пароль');
    };

//    $scope.showRightBlock = function(){
//        jQuery("#left-block-authorize").addClass("authorize_main_block_half").removeClass("authorize_main_block");
//        jQuery("#right-block-authorize").css("display", "table-cell");
//    }
//
//    $scope.hideRightBlock = function(){
//        jQuery("#right-block-authorize").fadeOut();
//        jQuery("#left-block-authorize").addClass("authorize_main_block").removeClass("authorize_main_block_half");
//    }

    $scope.showHelp = function(){
        $scope.showAuthHelp = true;
    }

    $scope.puk_btn =function(){
        $scope.toggleSMS = false;
        $scope.showPukBlock = true;
        $scope.showCodeProblemBlock = false;
        $scope.showCodeProblemLink = false;
    }

    $scope.register_puk = function(){
//        alert($scope.userPukCode.length)
        if( $scope.userPukCode.length > 3 ){
            $scope.showSuccessCreating = true;
            $scope.toggleSMS2 = false;
            $scope.show_regBtn = false;
            $scope.showPassword = false;
            $scope.showLogin = false;
            $scope.showSocials = false;
            $scope.showPukBlock = false;
            setTimeout(function () {
                $location.path("/success");
            }, 1000)
        }
        else{
            alert("Введиите PUK-код!")
        }
    }

    $scope.register = function(){
        $scope.disableLogin = true;

        if($scope.userLogin.length < 8){
            $scope.showAuthAlertLogin = true;
        }
        else{
            if($scope.userPassword==""){
                $scope.showAuthAlertPassword = true;
            }
            else{
                if($scope.toggleSMS2==true){
                    if ($scope.toggleSMS === true && $scope.userSmsCode == "" ){
                        $scope.showAuthAlertWrongCode = true;
                        $scope.showCodeProblemLink = true;
                    }
                     else {
                        $scope.showSuccessCreating = true;
                        $scope.toggleSMS2 = false;
                        $scope.show_regBtn = false;
                        $scope.showPassword = false;
                        $scope.showLogin = false;
                        $scope.showSocials = false;
                        $scope.showPukBlock = false;
                        setTimeout(function () {
                            $location.path("/success");
                        }, 1000)
                    }
                }
                else{
//                    $scope.toggleSMS = true;
//                    $scope.showPassword = false;
//                    $scope.show_regBtn = false;
                    //alert(7)
                    $scope.showSuccessCreating = true;
                    $scope.toggleSMS2 = false;
                    $scope.show_regBtn = false;
                    $scope.showPassword = false;
                    $scope.showLogin = false;
                    $scope.showSocials = false;
                    $scope.showPukBlock = false;
                    setTimeout(function () {
                        $location.path("/success");
                    }, 1000)
                }

            }
        }

    }

    $scope.getDisposablePassword = function(){
        if( $scope.userLogin.length < 8 ){
            $scope.showAuthAlertLogin = true;

        }
        else{
            //alert("не введен логин!");
            this.toggleSMS = true;
            $scope.showDisposablePassword = false;
            $scope.disableLogin = true;
            $scope.showPassword = false;
        }
    }

    $scope.get_code = function () {
        this.toggleSMS = false;
        this.toggleSMS2 = true;
        this.show_regBtn = true;
    }

    $scope.helpWithCode = function(){
        alert("Выбрана помощь!"); //TODO: remove?
    }

    $scope.dynamicPopover = 'Ошибка!';
    $scope.dynamicPopoverTitle = 'Пароль неверный';
});



ssoApp.controller('registerController', function($scope, $location) {
    $scope.showSuccessMsg = false;
    $scope.showHelpPopup = false;
    $scope.showWrongLogin = false;
    $scope.showSMSBlock1 = false;
    $scope.showSMSBlock2 = false;
    $scope.showHelpBlock = false;
    $scope.showWrongPhone = false;
    $scope.showWrongSCode = false;
    $scope.showRegBtn = true;

    $scope.regLogin = "Електронна пошта або номер мобильного";
    $scope.smsCodeIn = "";

    $scope.register_newUser = function(){
        if($scope.regLogin!=""){

            console.log($scope.regLogin.length)
            if($scope.regLogin.length <10){
                $("#reg-name").attr("placeholder", "Електронна пошта або номер мобильного")
                $("#reg-name").removeClass("input-info").addClass("input-warning");
                $scope.showWrongPhone = true;
                jQuery("#first-icon").removeClass("info-img").addClass("warning-img");
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
        jQuery("#first-icon").addClass("info-img").removeClass("warning-img");
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
        $scope.showPukBlock = false;

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
            if($scope.showPukBlock===true) $location.path( "/personal" );
        }
        else{
            //alert(34)
            $location.path( "/personal" );
        }
    }

    $scope.show_puk =function(){
        $scope.showPukBlock = true;
        $scope.showSMSBlock2 = false;
        $scope.showHelpBlock = false;
    }

});
