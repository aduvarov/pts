enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED,
}

const res = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS,
}

// 1 - Успех
// 2 - в процессе
// 3 - отклонён

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS)
action(1)

function compute() {
    return 3
}

enum Roles {
    ADMIN,
    USER = compute(),
}

const enum Directions {
    UP,
    RIGHT,
    DOWN,
    LEFT,
}

const move = Directions.UP
