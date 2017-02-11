Djello.controller('MembershipCreateCtrl', ['$scope', 'userService', 'membershipService', 'Auth',
  function($scope, userService, membershipService, Auth) {

    var memberId;

    var _setNonMemberUsers = function() {
      userService.all()
      .then(function(users) {
        $scope.nonMemberUsers = users.filter(function(user) {
          var nonMember = true;
          for (var i = 0; i < $scope.memberships.length; i++) {
            var membership = $scope.memberships[i];
            if (membership.user.id === user.id) {
              nonMember = false;
              break
            }
          }
          return nonMember;  
        });
      })
    }

    var _removeNonMember = function(user) {
      for (var i = 0; i < $scope.nonMemberUsers.length; i++) {
        var nonMember = $scope.nonMemberUsers[i];
        if (nonMember.id === user.id) {
          $scope.nonMemberUsers.splice(i, 1);
          break
        }
      }
    }

    $scope.startSelectingMember = function() {
      $scope.selectingMember = true;
    }

    $scope.stopSelectingMember = function() {
      if ($scope.selectingMemberLocked) { return; }
      $scope.selectingMember = false;
    }

    $scope.selectMember = function(email, id) {
      $scope.memberEmail = email;
      memberId = id;
      $scope.unlockSelectingMember()
      $scope.stopSelectingMember()
    }

    $scope.lockSelectingMember = function() {
      $scope.selectingMemberLocked = true;
    }

    $scope.unlockSelectingMember = function() {
      $scope.selectingMemberLocked = false;
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
        $scope.memberships.push(membership);
        _removeNonMember(membership.user);
      });
    }

    $scope.toggleShowingMemberships = function() {
      $scope.showingMemberships = !$scope.showingMemberships;
    }

    $scope.$on('destroyMembership', function(e, membership) {
      console.log(membership.joinable_id, $scope.joinableId)
      if (membership.joinable_id === $scope.joinableId) {
        for (var i = 0; i < $scope.memberships.length; i++) {
          if ($scope.memberships[i].id === membership.id) {
            $scope.memberships.splice(i, 1);
          }
        }
        $scope.nonMemberUsers.push(membership.user)
      }
    })

    membershipService.all({
      joinable_type: $scope.joinableType,
      joinable_id: $scope.joinableId
    }).then(function(memberships) {
      $scope.memberships = memberships;
      _setNonMemberUsers();
    })

    $scope.showingMemberships = false;
    
    $scope.stopSelectingMember();

    Auth.currentUser()
      .then(function(user) {
        $scope.currentUser = user;
      })
    
  }]);