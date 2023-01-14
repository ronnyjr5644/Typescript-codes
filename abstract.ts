

// declaring a Product class with access modifiers
class Product {
    static productPrice = 15000;
    private productId: number;
    public productName: string;
    
    private productCategory: string;
    product(){
        this.getProductId();
    }
    // declaration of constructor with 3 parameters
    constructor(productId: number, productName, productCategory){
      this .productId = productId;
      this .productName = productName;
      this .productCategory = productCategory;
    }
    
    
    // method ot display product id details
    getProductId() {
    console.log('The Product id is : ' + this .productId);
    }
    
    }
    
    // declaring a Gadget class extending the properties from Product class
    class Gadget extends Product{
    
    // method to display productCategory property
    getProduct(): void{
      console.log('Product category is : '+ this .productCategory);
    }
    }
    
    // Gadget Class object creation
    let g: Gadget = new Gadget(1234, 'Mobile', 'SmartPhone');
    
    // invoking getProduct method with the help of Gadget object
    g.getProduct();
    
    // invoking getProductId method with the help of Gadget object
    g.getProductId();
    
    // line to populate product name property with Gadget object
    console.log('Product name is : ' + g.productName);
    
    // line to populate static property product price directly with Product class name
    console.log('Product price is : ' + Product.productPrice);
    
    abstract class Productfeature {
    getFeatures(): string {
      return 'This product has camera feature';
    }
    abstract getProductName(): string;
    }
    
    // declaring Clothing class extending abstract class Productfeature
    class Clothing extends Productfeature {
    getProductName(): string {
    return 'Product name is Shirt';
    }
    }
    
    // Clothing class object creation
    let c = new Clothing ();
    
    // line to invole getProductName() through Clothing object
    console.log(c.getProductName());
    


// abstract class basicinfo{
//     abstract firstname:string;
//     middlename:string;
//     lastname:string;
//     dob:Date;
//     abstract getagedetails():number
// }

// class govtdetails extends basicinfo{
//     constructor(
//         public firstname:string;
//     public lastname:string;
//     public dob:Date;
//     private drivinglicencestatus:boolean
//     public middlename?:string;
//     ){
//         super()
//     }
//     getagedetails():number{
//         let difference=Date.now()-this.dob.geime()
//         let age_data=new Date(difference)
//         return Math.abs(age_data.getUTCFullYear()-1970);
//     }
    
// }