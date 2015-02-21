raspberryApp.controller('tvCtrl', function($scope, $location, $state) {
  $scope.a = "b";
  var socket = io("http://127.0.0.1:3000");
  socket.on('started', function(application) {
    $state.go('youtube');
  });
});
