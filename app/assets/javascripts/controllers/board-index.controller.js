Djello.controller('BoardIndexCtrl', ['$scope', 'boardService',
  function($scope, boardService) {
    boardService.all()
      .then(function(boards) {
        $scope.boards = boards;
      })

    $scope.$on('updateBoards', function(e, boards) {
      $scope.boards = boards;
    })
  }]);