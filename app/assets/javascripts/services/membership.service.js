Djello.factory('membershipService', ['Restangular',
  function(Restangular) {
    
    var create = function(params) {
      return Restangular.all('memberships').post(params)
    }

    var all = function(params) {
      return Restangular.all('memberships').customGETLIST('', params)
    }

    return {
      create: create,
      all: all
    }
  }]);