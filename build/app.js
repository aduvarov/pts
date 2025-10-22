"use strict";
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, reciever, history) {
        super(history);
        this.user = user;
        this.reciever = reciever;
    }
    execute() {
        this.reciever.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.reciever.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохраняю пользователя с id ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаляю пользователя с id ${userId}`);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReciever(reciever) {
        this.reciever = reciever;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.reciever, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller = new Controller();
controller.addReciever(new UserService());
controller.run();
