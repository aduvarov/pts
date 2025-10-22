"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthMiddleWare extends AbstractMiddleware {
    handle(request) {
        console.log('AuthMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: 'Вы не авторизованы' };
    }
}
class ValidateMiddleWare extends AbstractMiddleware {
    handle(request) {
        console.log('ValidateMiddleware');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'Нет body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log('Controller');
        return { success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleWare();
const auth = new AuthMiddleWare();
auth.next(validate).next(controller);
console.log(auth.handle({ userId: 1, body: 'load' }));
