/**
 * Created by ZZS on 6/25/16.
 */
var app = angular.module('restaurantApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partial/guest/_reservation.html',
        controller: 'ReservationController',
        controllerAs: 'resvCtrl'
    }).when('/about', {
        templateUrl: 'partial/_about.html'
        // controller: 'ReservationController'
    }).when('/reservation', {
        redirectTo: '/'
    }).when('/success', {
        templateUrl: 'partial/guest/_editReservation.html',
        controller: 'ReservationController',
        controllerAs: 'resvCtrl'
    }).when('/editReservation', {
        templateUrl: 'partial/guest/_editReservation.html',
        controller: 'ReservationController',
        controllerAs: 'resvCtrl'
    }).when('/login', {
        templateUrl: 'partial/guest/_login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
    }).when('/reservationList', {
        templateUrl: 'partial/admin/_reservationList.html',
        // resolve: {
        //     auth: ['$q', '$location', 'loginService', function ($q, $location, loginService) {
        //         return loginService.session().then(function (success) {
        //
        //         }, function (error) {
        //             $location.path('/login');
        //             $location.replace();    //prevent access from browser history
        //             return $q.reject(error); //indicate the promise still fails, if dont reject then means error has been handled here
        //         });
        //     }]
        // }
        controller: 'ReservationController',
        controllerAs: 'resvCtrl'
    }).when('/seating', {
        templateUrl: 'partial/admin/_seating.html',
        controller: 'TableController',
        controllerAs: 'tableCtrl'
    }).when('/profile', {
        templateUrl: 'partial/admin/_profile.html',
        controller: 'ProfileController',
        controllerAs: 'profileCtrl'
    }).when('/setting', {
        templateUrl: 'partial/admin/_setting.html',
        controller: 'ProfileController',
        controllerAs: 'profileCtrl'
    }).when('/contacts', {
        templateUrl: 'partial/admin/_contacts.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl'
    }).otherwise({
        templateUrl: 'error.html'
    });
});