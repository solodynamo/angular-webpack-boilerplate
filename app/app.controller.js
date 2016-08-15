'use strict';




////Requiring css
//require('./css/style.scss');


module.exports =require('angular').module('app', []).controller('myCtrl', function () {

    var vm = this;
    vm.tagLine = "Let There Be Peace In The World";

});


