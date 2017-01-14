myApp.controller('details', function($scope, infoService, toggleService) {
  // self-explanatory
  $scope.getGoals = () => infoService.getGoals();
  // get program info
  $scope.getInfo = () => infoService.getInfo();
  // zoom out
  $scope.back = () => toggleService.back();
});
