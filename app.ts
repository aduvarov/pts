enum PaymentStatus {
    Holded,
    Processd,
    Reversed,
}
class Payment {
    id: number
    status: PaymentStatus = PaymentStatus.Holded
    createdAt: Date = new Date()
    updatedAt: Date

    constructor(id: number) {
        this.id = id
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(): void {
        if (this.status === PaymentStatus.Processd) {
            throw new Error('Платёж не может возвращён')
        }
        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

const payment = new Payment(1)
payment.unholdPayment()
console.log(payment)
const time = payment.getPaymentLifeTime()
console.log(time)
