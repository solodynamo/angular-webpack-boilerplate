var angular=require('angular');

var app=angular.module('app',[]);

require('./css/style.scss');

app.controller('myCtrl',function($scope)
{

$scope.tagLine="Let There Be Peace In The World";

})


document.write('welcome to my app');
console.log('app loaded');
console.log('hii world');
console.log("heya world");