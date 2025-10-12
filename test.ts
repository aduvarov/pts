enum CheckoutStatus {
    Success = 'SUCCESS',
    Failed = 'FAILED',
}

class Cart {
    private products: Product[] = []
    private delivery: Delivery

    public addProduct(product: Product): void {
        this.products.push(product)
    }

    public deleteProduct(productId: number): void {
        this.products = this.products.filter(
            (product: Product) => product.id !== productId
        )
    }

    public getSum(): number {
        return this.products.reduce(
            (sum: number, current: Product) => sum + current.price,
            0
        )
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery
    }

    checkout(): CheckoutStatus {
        if (this.products.length && this.delivery) {
            return CheckoutStatus.Success
        } else {
            return CheckoutStatus.Failed
        }
    }
}

class Product {
    constructor(public id: number, public title: string, public price: number) {}
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class Delivery {
    constructor(public d: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(public address: string, d: Date) {
        super(d)
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date())
    }
}

const p1 = new Product(17, 'Молоко', 680)
console.log('p1 ==> ', p1)
const p2 = new Product(13, 'Хлеб', 200)
const p3 = new Product(17, 'Яйца 10шт', 550)

const client1Cart = new Cart()
console.log(client1Cart)
client1Cart.addProduct(p1)
client1Cart.addProduct(p2)
client1Cart.addProduct(p3)
client1Cart.setDelivery(new HomeDelivery('ул. Лизы Чайкиной 22', new Date()))
client1Cart.deleteProduct(13)
console.log(client1Cart)
console.log(client1Cart.getSum())

const client2Cart = new Cart()
client2Cart.addProduct(new Product(13, 'Хлеб', 200))
console.log('client2Cart.getSum() ==> ', client2Cart.getSum())
client2Cart.setDelivery(new ShopDelivery(30))
console.log('client2Cart.checkout() ==> ', client2Cart.checkout())

const client3Cart = new Cart()
client3Cart.addProduct(new Product(13, 'Хлеб', 200))
console.log('client3Cart.checkout() ==> ', client3Cart.checkout())

const client4Cart = new Cart()
client4Cart.setDelivery(new ShopDelivery(30))
console.log('client4Cart ==> ', client4Cart)
console.log('client4Cart.checkout() ==> ', client4Cart.checkout())
