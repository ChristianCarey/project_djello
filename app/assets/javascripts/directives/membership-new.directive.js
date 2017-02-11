Djello.directive('membershipNew', function() {
  return {
    templateUrl: '/directives/memberships/new.html',
    resrict: 'E',
    scope: {
      joinableType: '=',
      joinableId: '=',
      joinableOwnerId: '='
    }
  }
})