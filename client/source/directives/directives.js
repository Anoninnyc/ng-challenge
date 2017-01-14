myApp.directive('dashboardView', function() {
  return {
    restrict: "A",
    templateUrl: '../source/views/dashboardView.html'
  };
});

myApp.directive('detailsView', function() {
  return {
    restrict: "A",
    templateUrl: '../source/views/detailsView.html'
  };
});
