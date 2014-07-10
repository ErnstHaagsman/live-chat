var events = require('events');

var global_chat = new events.EventEmitter();

global_chat.messages = [];

global_chat.addMessage = function(nickname, message){
    var messageObject = {
        nickname: nickname,
        text: message
    };

    global_chat.messages.push(messageObject);

    global_chat.emit('message', messageObject);
};

module.exports = global_chat;