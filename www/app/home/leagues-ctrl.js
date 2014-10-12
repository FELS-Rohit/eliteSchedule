(function(){
  'use strict';

  angular.module('eliteApp')
    .controller('leaguesCtrl', ['eliteApi', leaguesCtrl]);

      function leaguesCtrl(eliteApi){
        console.log('Hola');
        var vm = this;

        var leagues = eliteApi.getLeagues;
        var leagueData = eliteApi.getLeagueData;

        console.log('leagues', leagues);
        console.log('leagueData', leagueData);
      };
})();