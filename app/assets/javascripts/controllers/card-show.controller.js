
Djello.controller('CardShowCtrl', ['$scope', '$uibModal', 'cardService', '$timeout', '$rootScope',
  function($scope, $uibModal, cardService, $timeout, $rootScope) {

    var _focus = function(id) {
      $timeout(function() {
        document.getElementById(id).focus()
      })
    }

    var _resetEditing = function() {
      $scope.editing = {
        title: false,
        description: false
      };
    }

    $scope.showCard = function() {
      $uibModal.open({
        template: "<card-show></card-show>",
        scope: $scope
      })
    }

    $scope.updateCard = function() {
      _resetEditing();
      cardService.update($scope.card);
    }

    $scope.edit = function(attribute) {
      $scope.editing[attribute] = true;
      _focus('edit-card-' + attribute);
    }

    $scope.handleDrop = function(staticCardId, droppedCardId, originalListId) {
      console.log(droppedCardId)
      var staticCard;
      var droppedCard = {
        id: droppedCardId,
        list_id: $scope.list.id
      };

      if (staticCardId !== -1) {
        for (var i = 0; i < $scope.list.cards.length; i++) {
          var card = $scope.list.cards[i]
          if (card.id == staticCardId) {
            staticCard = card;
            break;
          }
        }
      } else {
        staticCard = {
          position: -1
        }
      }
      droppedCard.new_position = staticCard.position + 1;
      cardService.update(droppedCard)
        .then(function(card) {
          $rootScope.$broadcast('dropCard', {
            card: card,
            originalListId: originalListId
          })
        });
    }

    _resetEditing();

  }]);