routing.$inject = ['$urlRouterProvider', '$locationProvider'];

module.exports=function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}