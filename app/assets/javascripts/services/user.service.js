Djello.factory('userService', ['Restangular', 'Auth',
  function(Restangular, Auth) {
    
    var all = function() {
      return Restangular.all('users').getList();
    }

    return {
      all: all
    }
  }]);