"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isResponseSucess(res) {
    return res.status === PaymentStatus.Success;
}
let getIdFromData = res => {
    if (isResponseSucess(res)) {
        return res.data.databaseId;
    }
    throw new Error(res.data.errorMessage);
};
