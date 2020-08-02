import { observable, action, decorate } from "mobx";

class helper {

    name = ''      // variable which holds the user name

    users = []     // array which holds all users

    chatUserName = ''     // person name who is chatted with

    chatsList = []      // array which holds all previous chats

    messages = []      // array which holds all messages in a chat dialog


}

decorate(
    helper,
    {
        name:observable,
        users:observable,
        chatUserName:observable,
        chatsList:observable,
        messages:observable,

    }
);

export default new helper();
