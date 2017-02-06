Djello.service('listService', ['Restangular', '$rootScope', 
  function(Restangular, $rootScope) {

    var create = function(params) {
      return Restangular.all('lists').post(params)
        .then(function(list) {
          $rootScope.$broadcast('createList', list)
          return list;
        })
    }

    return {
      create: create
    }
  }]);