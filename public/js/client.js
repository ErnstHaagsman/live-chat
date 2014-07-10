function ChatController ($scope, $http){

    $scope.messages = [
        {
            "nickname": "placeholder",
            "text": "check angular"
        },
        {
            "nickname": "placeholder",
            "text": "message 2"
        }
    ];

    $scope.send_message = function(){

        // Don't send empty messages
        if($scope.message === "") return;

        console.log($scope.nickname + " sent message: " + $scope.message);
        $scope.message = "";

    }

}