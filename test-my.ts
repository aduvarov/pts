interface Req {
    sum: number
    from: number
    to: number
}

type DataResp =
    | {
          databaseId: number
          sum: number
          from: number
          to: number
      }
    | {
          errorMessage: string
          errorCode: number
      }

interface SuccessResp {
    status: string
    data: DataResp
}

interface ErrorResp {
    status: string
    data: DataResp
}

type Resp = SuccessResp | ErrorResp

let x: Resp = {
    status: 'success',
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4,
    },
}
