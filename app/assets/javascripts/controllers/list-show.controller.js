Djello.controller('ListShowCtrl', ['$scope', 'listService', '$timeout',
  function($scope, listService, $timeout) {
    var _resetEditing = function() {
      $scope.editing = {
        title: false
      }
    }

    var _focus = function(id) {
      $timeout(function() {
        document.getElementById(id).focus()
      })
    }

    $scope.edit = function(attribute) {
      $scope.editing[attribute] = true;
      _focus('edit-list-' + attribute);
    }

    $scope.updateList = function() {
      _resetEditing();
      listService.update($scope.list)
    }

    _resetEditing();
  }]);