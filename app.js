"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS,
};
// 1 - Успех
// 2 - в процессе
// 3 - отклонён
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
const move = 0 /* Directions.UP */;
