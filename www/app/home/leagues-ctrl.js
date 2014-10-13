(function(){
  'use strict';

  angular.module('eliteApp')
    .controller('leaguesCtrl', ['$state', 'eliteApi', leaguesCtrl]);

      function leaguesCtrl($state, eliteApi){
        var vm = this;

        eliteApi.getLeagues(function(data){
          vm.leagues = data;
        });

        // console.log('leagues', leagues);
        // console.log('leagueData', eliteApi.leagueData());

        vm.selectLeague = function(leagueId){
          eliteApi.setLeagueId(leagueId);
          $state.go('app.teams');
        };

      };
})();