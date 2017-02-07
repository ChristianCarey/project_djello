Djello.service('listService', ['Restangular', '$rootScope', 
  function(Restangular, $rootScope) {

    var create = function(params) {
      return Restangular.all('lists').post(params)
        .then(function(list) {
          $rootScope.$broadcast('createList', list)
          return list;
        })
    }

    var update = function(params) {
      var list = Restangular.restangularizeElement(null, params, 'lists');
      return list.put()
    }

    var find = function(id) {
      return Restangular.one('lists', id).get()
    }

    var destroy = function(list) {
      Restangular.one('lists', list.id).remove()
        .then(function(list) {
          $rootScope.$broadcast('destroyList', list)
        })
    }

    return {
      create: create,
      update: update,
      find: find,
      destroy: destroy
    }
  }]);