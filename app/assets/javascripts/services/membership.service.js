Djello.factory('membershipService', ['Restangular', '$rootScope',
  function(Restangular, $rootScope) {
    
    var create = function(params) {
      return Restangular.all('memberships').post(params)
    }

    var all = function(params) {
      return Restangular.all('memberships').customGETLIST('', params)
    }

    var destroy = function(membership) {
      return Restangular.one('memberships', membership.id).remove()
        .then(function(membership) {
          $rootScope.$broadcast('destroyMembership', membership);
        })
    }

    return {
      all: all,
      create: create,
      destroy: destroy
    }
  }]);