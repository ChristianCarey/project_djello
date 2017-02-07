Djello.controller('MembershipCreateCtrl', ['$scope', 'userService', 'membershipService', '$timeout',
  function($scope, userService, membershipService, $timeout) {

    var memberId;

    $scope.startSelectingMember = function() {
      $scope.selectingMember = true;
    }

    $scope.stopSelectingMember = function() {
      $timeout(function() {
        $scope.selectingMember = false;
      }, 80)
    }

    $scope.selectMember = function(email, id) {
      $scope.memberEmail = email;
      memberId = id;
    }
    
    $scope.createMembership = function() {
      membershipService.create({
        user_id: memberId,
        joinable_type: $scope.joinableType,
        joinable_id: $scope.joinableId
      })
      .then(function(membership) {
        $scope.memberEmail = null;
        memberId = null;
        $scope.memberships.push(membership)
      });
    }

    $scope.toggleShowingMemberships = function() {
      console.log('wat')
      $scope.showingMemberships = !$scope.showingMemberships;
    }

    membershipService.all({
      joinable_type: $scope.joinableType,
      joinable_id: $scope.joinableId
    }).then(function(memberships) {
      $scope.memberships = memberships;
    })


    userService.all()
      .then(function(users) {
        $scope.users = users;
      })

    $scope.showingMemberships = false;
    $scope.stopSelectingMember();
  }]);