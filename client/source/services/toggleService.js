myApp.service('toggleService', function(infoService) {
  //zoom in/toggle view
  this.filter = index => {
    infoService.specificApp = infoService.ids.indexOf(index);
    infoService.filtered = true;
  };
  //zoomout/toggle view
  this.back = () => infoService.filtered = false;
});
