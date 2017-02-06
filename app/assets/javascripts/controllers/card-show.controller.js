Djello.controller('CardShowCtrl', ['$scope', '$uibModal', 'cardService', '$timeout',
  function($scope, $uibModal, cardService, $timeout) {

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

    _resetEditing();

  }]);