Djello.directive('droppable', function() {
  return {
    link: function(scope, element) {
      var el = element[0];

      el.addEventListener('dragover', function(e) {
        e.dataTransfer.dropEffect = 'move';
        if (e.preventDefault) { e.preventDefault(); }
        this.classList.add('over');
        return false;
      }, false);

      el.addEventListener('dragenter', function(e) {
        this.classList.add('over');
        return false;
      }, false);

      el.addEventListener('dragleave', function(e) {
        this.classList.remove('over');
        return false;
      }, false);

      el.addEventListener('drop', function(e) {
        if (e.stopPropagation) { e.stopPropagation(); }
        this.classList.remove('over');
        var $item = angular.element('#' + e.dataTransfer.getData('id'));
        var droppedCardId = $item.attr('id').slice(4);
        var originalListId = $item.data('list-id');
        var staticCardId;
        if (el.classList[0] === 'shadow-card') {
          staticCardId = -1;
        } else {
          staticCardId = el.id.slice(4);
        }
        scope.handleDrop(staticCardId, droppedCardId, originalListId);
        return false;
      }, false);
    }
  }
})