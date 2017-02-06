Djello.factory('boardService', ['Restangular', '$rootScope', 'listService', 'cardService', 
  function(Restangular, $rootScope, listService, cardService) {
    
    var _boards;

    var all = function() {
      return Restangular.all('boards').getList()
        .then(function(boards) {
          _boards = boards;
          return _boards;
        });
    }

    var find = function(id) {
      return Restangular.one('boards', id).get()
        .then(function(board) {
          return board;
        })
    }

    var create = function(params) {
      return Restangular.all('boards').post(params)
        .then(function(board) {
          _boards.push(board);
          _broadcast()
          return board
        })
    }

    var update = function(params) {
      var board = Restangular.restangularizeElement(null, params, 'boards')
      return board.put()
    }

    var _broadcast = function() {
      $rootScope.$broadcast('updateBoards', _boards)
    }

    Restangular.extendModel('boards', function(board) {
      board.destroy = function() {
        return Restangular.one('boards', this.id).remove()
          .then(function(board) {
            all().then(_broadcast);
            return board
          })
      }

      board.createList = function(params) {
        return listService.create(params);
      }

      board.createCard = function(params) {
        return cardService.create(params)
      }

      return board
    })

    return {
      all: all,
      find: find,
      create: create,
      update: update
    }
  }])