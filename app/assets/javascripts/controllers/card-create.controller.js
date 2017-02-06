Djello.controller('CardCreateCtrl', ['$scope', 
  function($scope) {
    $scope.createCard = function() {
      var params = $scope.newCard
      params.list_id = $scope.list.id;
      $scope.board.createCard(params)
        .then(_resetForm);
    }

    $scope.$on('createCard', function(e, card) {
      if (card.list.id === $scope.list.id) {
        $scope.list.cards.push(card)
      } 
    })

    var _resetForm = function() {
      $scope.newCard = {};
      $scope.newCardForm.$setPristine();
    }
  }]);