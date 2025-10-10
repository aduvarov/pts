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

type f = (res: IResponseSucess | IResponseFailed) => number
type Res = IResponseSucess | IResponseFailed

function isResponseSucess(res: Res): res is IResponseSucess {
    return res.status === PaymentStatus.Success
}

let getIdFromData: f = res => {
    if (isResponseSucess(res)) {
        return res.data.databaseId
    }
    throw new Error(res.data.errorMessage)
}
