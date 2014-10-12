(function(){
  'use strict';

  angular.module('eliteApp')
    .controller('locationsCtrl', ['eliteApi', locationsCtrl]);

      function locationsCtrl(eliteApi){
        var vm = this;
        var data = eliteApi.getLeagueData();
        vm.locations = data.locations;
      };
})();