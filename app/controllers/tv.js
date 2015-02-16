raspberryApp.controller('tvCtrl', function($scope, $location, $state) {
  $scope.a = "b";
  var socket = io("http://192.168.1.21:3000");
  socket.on('started', function(application) {
    $state.go('youtube');
  });
});