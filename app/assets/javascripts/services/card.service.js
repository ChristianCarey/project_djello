Djello.factory('cardService', ['Restangular', '$rootScope',
  function(Restangular, $rootScope) {

    var create = function(params) {
      return Restangular.all('cards').post(params)
        .then(function(card) {
          $rootScope.$broadcast('createCard', card)
        })
    }

    var update = function(params) {
      var card = Restangular.restangularizeElement(null, params, 'cards')
      return card.put()
    }

    var destroy = function(card) {
      Restangular.one('cards', card.id).remove()
        .then(function(card) {
          $rootScope.$broadcast('destroyCard', card)
        })
    }

    return {
      create: create,
      update: update,
      destroy: destroy
    }
  }]);