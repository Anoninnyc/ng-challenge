myApp.controller('dashboard', function($scope, infoService, toggleService) {
  $scope.programs = infoService.programs;
  // zoom in
  $scope.filter = index => toggleService.filter(index);
  // Are we zoomed in?
  $scope.getFiltered = () => infoService.getFiltered();
});
