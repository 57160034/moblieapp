angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('menu.wellcome', {
        url: '/page1',
        views: {
            'side-menu21': {
                templateUrl: 'templates/wellcome.html',
                controller: 'wellcomeCtrl'
            }
        }
    })

    .state('menu.about', {
        url: '/page3',
        views: {
            'side-menu21': {
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            }
        }
    })

    .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
    })

    .state('menu.login', {
        url: '/page8',
        views: {
            'side-menu21': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('menu.signup', {
        url: '/page9',
        views: {
            'side-menu21': {
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            }
        }
    })

    .state('home1', {
        url: '/home1',
        templateUrl: 'templates/home1.html'

    })

    $urlRouterProvider.otherwise('home1')



});
