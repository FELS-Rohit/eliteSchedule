(function(){
  'use strict';

  angular.module('eliteApp')
    .controller('leaguesCtrl', ['$state', 'eliteApi', leaguesCtrl]);

      function leaguesCtrl($state, eliteApi){
        console.log('Hola');
        var vm = this;

        var leagues = eliteApi.getLeagues();
        vm.leagues = leagues;

        console.log('leagues', leagues);
        console.log('leagueData', eliteApi.leagueData());

        vm.selectLeague = function(leagueId){
          // Todo: select correct league
          $state.go('app.teams');
        };

      };
})();