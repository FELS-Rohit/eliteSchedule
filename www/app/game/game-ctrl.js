(function(){
  'use strict';

  angular.module('eliteApp')
    .controller('GamesCtrl', ['$stateParams', 'eliteApi', GamesCtrl]);

      function GamesCtrl($stateParams, eliteApi){
        var vm = this;

        var gameId = Number($stateParams.id);
        var data = eliteApi.getLeagueData();
        vm.game = _.find(data.games, {"id": gameId});

      };
})();