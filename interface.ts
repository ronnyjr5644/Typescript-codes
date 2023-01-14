
// declaring an interface
interface Product {
    productId: number;
    productName: string;
    productdescription?: string;
  }
  // declaring a interface with function type
  interface StringGenerator {
    (chars: string, nums: number): string;
    }

    // declaring a productList interface which is extends from Category and Product interfaces
  interface productList extends Product {
    list: Array< string>;
  }
  
  interface Productdisplay {
    getProductDetails(): string[];
    displayProductName: (prouctId: number) => string;
  }
  
  // logic to display the Product details with interface object as parameter
  function getProductDetails(productobj: Product): string {
    return 'The product name is : ' + productobj.productName;
  }
  
  // declaring a variable having interface properties
  let prodObject = { productId: 1001, productName: 'Mobile' };
  let prodObjectnew = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget' };
  // declaring variable and invoking Product details function
  let productDetails: string = getProductDetails(prodObject);
  
  
  let productDetailsnew: string = getProductDetails(prodObjectnew);
  
  // line to populate the created product on console
  console.log(productDetails);
  console.log('Invoking Duck Typing');
  console.log(productDetailsnew);
  
  
  
  // declaring a variable which is type of productList interface
  let productDetails1: productList = {
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung', 'Motorola', 'LG']
  }
  
  // assigning list value of productDetails variable into another variable
  let listProduct = productDetails1.list;
  
  // assigning productName value of productDetails variable into another variable
  let pId: number = productDetails1.productId;
  
  // line to populate Product name
  console.log('From extended interface');
  
  console.log('Product ID is ' + pId);
  
  // line to populate Product list
  console.log('Product List is ' + listProduct);
  
  
  
  
  
  
  
  // declaring Gadget class which implements Productdisplay interface
  class Gadget implements Productdisplay {
    getProductDetails(): string[] {
      return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId: number): string {
      if (productId === 101) {
        return 'Product Name is Mobile';
      }
      else if (productId === 201) {
        return 'Product Name is Tablet';
           }
    }
  
    getGadget(): string[] {
      return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
  }
  
  // creating instance of class of interface type
  let g: Productdisplay = new Gadget();
  
  // creating variable to hold return value of displayProductName function
  let productName: string = g.displayProductName(201);
  console.log('From Gadget class');
  
  
  // line to populate Product name on console
  console.log(productName);

  // declaring a function
function CreateCustomerID(name: string, id: number): string{
    return 'The customer id is ' + name + ' ' + id;
    }
  
   
  
  
// creating reference variable of above declared interface
  let IdGenerator: StringGenerator;
  
    // assignment of function to interface reference variable
  IdGenerator = CreateCustomerID;
  
    // declaring a string parameter to hold return value of function type interface
  let id: string = IdGenerator('Mr.Tom', 101);
  
    // line to populate the Customer Details
  console.log("From Function Types");
  
  console.log(id);

  
  