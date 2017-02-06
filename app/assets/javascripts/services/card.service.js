Djello.factory('cardService', ['Restangular', '$rootScope', 
  function(Restangular, $rootScope) {

    var create = function(params) {
      return Restangular.all('cards').post(params)
        .then(function(card) {
          $rootScope.$broadcast('createCard', card)
        })
    }

    return {
      create: create
    }
  }]);