interface IPayment {
    sum: number
    from: number
    to: number
}
interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

// interface IDataSucess {
//     databaseId: number
//     sum: number
//     from: number
//     to: number
// }

// interface IDataFailed {
//     errorMessage: string
//     errorCode: number
// }

// interface IResponseSucess {
//     status: PaymentStatus
//     data: IDataSucess | IDataFailed
// }

interface IDataSucess extends IPayment {
    databaseId: number
}

interface IDataFailed {
    errorMessage: string
    errorCode: number
}

interface IResponseSucess {
    status: PaymentStatus.Success
    data: IDataSucess
}

interface IResponseFailed {
    status: PaymentStatus.Failed
    data: IDataFailed
}
