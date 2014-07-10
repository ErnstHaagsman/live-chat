function ChatController ($scope, $http){

    var sock = new SockJS('/live');

    sock.onmessage = function(e){
        data = JSON.parse(String(e.data));
        if(Array.isArray(data)){
            $scope.messages = data;
        } else {
            $scope.messages.push(data);
        }

        $scope.$apply();
    };

    $scope.messages = [];

    $scope.send_message = function(){

        // Don't send empty messages
        if($scope.message === "") return;

        sock.send(JSON.stringify({
            nickname: $scope.nickname,
            text: $scope.message
        }));
        console.log($scope.nickname + " sent message: " + $scope.message);
        $scope.message = "";

    }

}