const products = [
];

module.exports = class Product{
    constructor(name, price, imageUrl, description){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct(){
        products.push(this);
    }

    static getAllProducts(){
        return products;
    }
}



//Static kullanımı
// const products = Product.getAllProducts();
// const p1 = new Product('Samsung s8', 4000, 'phone.jpg', 'açıklama');
// products.saveProduct();

// ekleme
//const p1 = new Product('Samsung s8', 4000, 'phone.jpg', 'açıklama');

