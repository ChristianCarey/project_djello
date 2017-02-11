Djello.controller('MembershipDestroyCtrl', ['$scope', '$uibModal', 'membershipService',
  function($scope, $uibModal, membershipService) {

    $scope.confirmDestroy = function() {
      $uibModal.open({
        template: "<confirm-delete></confirm-delete>",
        scope: $scope
      })
    }

    $scope.destroy = function() {
      membershipService.destroy($scope.membership);
    }
  }]);


 