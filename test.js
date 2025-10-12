"use strict";
var CheckoutStatus;
(function (CheckoutStatus) {
    CheckoutStatus["Success"] = "SUCCESS";
    CheckoutStatus["Failed"] = "FAILED";
})(CheckoutStatus || (CheckoutStatus = {}));
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    getSum() {
        return this.products.reduce((sum, current) => sum + current.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length && this.delivery) {
            return CheckoutStatus.Success;
        }
        else {
            return CheckoutStatus.Failed;
        }
    }
}
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(d) {
        this.d = d;
    }
}
class HomeDelivery extends Delivery {
    constructor(address, d) {
        super(d);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
const p1 = new Product(17, 'Молоко', 680);
console.log('p1 ==> ', p1);
const p2 = new Product(13, 'Хлеб', 200);
const p3 = new Product(17, 'Яйца 10шт', 550);
const client1Cart = new Cart();
console.log(client1Cart);
client1Cart.addProduct(p1);
client1Cart.addProduct(p2);
client1Cart.addProduct(p3);
client1Cart.setDelivery(new HomeDelivery('ул. Лизы Чайкиной 22', new Date()));
client1Cart.deleteProduct(13);
console.log(client1Cart);
console.log(client1Cart.getSum());
const client2Cart = new Cart();
client2Cart.addProduct(new Product(13, 'Хлеб', 200));
console.log('client2Cart.getSum() ==> ', client2Cart.getSum());
client2Cart.setDelivery(new ShopDelivery(30));
console.log('client2Cart.checkout() ==> ', client2Cart.checkout());
const client3Cart = new Cart();
client3Cart.addProduct(new Product(13, 'Хлеб', 200));
console.log('client3Cart.checkout() ==> ', client3Cart.checkout());
const client4Cart = new Cart();
client4Cart.setDelivery(new ShopDelivery(30));
console.log('client4Cart ==> ', client4Cart);
console.log('client4Cart.checkout() ==> ', client4Cart.checkout());
