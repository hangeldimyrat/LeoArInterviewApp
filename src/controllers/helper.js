import { observable, action, decorate } from "mobx";

class helper {

    name = ''

    users = []

    chatUserName = ''

    chatsList = []

    messages = []

}

decorate(
    helper,
    {
        name:observable,
        users:observable,
        chatUserName:observable,
        chatsList:observable,
        messages:observable

    }
);

export default new helper();
