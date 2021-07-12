const products = [
    {id: 1 ,name: 'Samsung S8', price: '3000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "1"},
    {id: 2 ,name: 'Samsung S8', price: '3000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "1"},
    {id: 3 ,name: 'Samsung S8', price: '3000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "1"},
    {id: 4 ,name: 'Monster', price: '5000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "2"},
    {id: 5 ,name: 'Excalibur', price: '7000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "2"},
    {id: 6 ,name: 'Buzdolabı', price: '3000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "3"},
    {id: 7 ,name: 'Çamaşır Makinesi', price: '3000', imageUrl:'phone.jpg', description: 'deneme', categoryid: "3"},

];

module.exports = class Product{
    constructor(name, price, imageUrl, description, categoryid){
        this.id =(Math.floor(Math.random()*9999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAllProducts(){
        return products;
    }
    static getById(id){
        const product = products.find(x=>x.id == id);
        return product;
    }
    static getProductsByCategoryId(categoryid){
        return products.filter(x => x.categoryid == categoryid);
    }
    static Update(product){
        console.log(product.id);
        const index = products.findIndex(x => x.id == product.id);
        

        products[0].name = product.name;
        products[0].description = product.description;
        products[0].price = product.price;
        products[0].imageUrl = product.imageUrl;

    }
    static DeleteById(id){
        const index = products.findIndex(x => x.id == id);
        products.splice(index, 1);
    }
}



//Static kullanımı
// const products = Product.getAllProducts();
// const p1 = new Product('Samsung s8', 4000, 'phone.jpg', 'açıklama');
// products.saveProduct();

// ekleme
//const p1 = new Product('Samsung s8', 4000, 'phone.jpg', 'açıklama');

