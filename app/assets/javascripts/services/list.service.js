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

    return {
      create: create,
      update: update
    }
  }]);