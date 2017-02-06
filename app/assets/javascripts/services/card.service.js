Djello.factory('cardService', ['Restangular', '$rootScope', '$q',
  function(Restangular, $rootScope, $q) {

    var create = function(params) {
      return Restangular.all('cards').post(params)
        .then(function(card) {
          $rootScope.$broadcast('createCard', card)
        })
    }

    var update = function(params) {
      console.log(params)
      var card = Restangular.restangularizeElement(null, params, 'cards')
      return card.put()
    }

    return {
      create: create,
      update: update,
    }
  }]);