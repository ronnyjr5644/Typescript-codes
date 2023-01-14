// declaring a function with optional parameter
function getMobileByManufacturer(manufacturer:any, id?: number): string[] {
    let MobileList: string[];
   
   // logic to be evaluated if id parameter while invoking above declared function
    if (id) {
     if (id === 101) {
     MobileList = ['Moto G Play, 4th Gen', 'Moto Z Play with Style Mod'];
     return MobileList;
     }
     }
   
   // logic to return MobileList based on manufacturer category
    if (manufacturer === 'Samsung') {
           MobileList = ['Samsung Galaxy S6 Edge', 'Samsung Galaxy Note 7',
          'Samsung Galaxy J7 SM-J700F'];
           return MobileList;
       } else if (manufacturer === 'Apple') {
       MobileList = ['Apple iPhone 5s', 'Apple iPhone 6s ', 'Apple iPhone 7'];
       return MobileList;
       } else {
       MobileList = ['Nokia 105', 'Nokia 230 Dual Sim'];
       return MobileList;
       }
   
   }
   
   // statement to invoke function with optional parameter
   console.log('The available mobile list : ' + getMobileByManufacturer('Apple'));
   
   // statement to invoke function with default parameter
   console.log('The available mobile list : ' + getMobileByManufacturer(undefined, 101));
   // declaring an Array with 3 objects
   let manufacturers = [{ id: 'Samsung', price: 15000 },
           { id: 'Microsoft', price: 20000 },
           { id: 'Apple', price: 40000  },
           { id: 'Micromax', price: 10000  }
       ];
   
   let test;
   
   // Arrow function to populate the details of Array whose price is greater than 20000
   function myFunction() {
     test = manufacturers.filter((manufacturer) => manufacturer.price >= 20000);
   }
   
   // declaring a empty string array
let cart: string[] = [];

// arrow function logic to push values into cart array
let pushtoCart = (productName: string) => { cart.push(productName); }

// logic to add items into cart
function addtoCart(productName: string[]): string[]{

    for (let i = 0; i < productName.length; i++) {
        pushtoCart(productName[i]);
    }
    return cart;

}
   // self-invoking an arrow function
   myFunction();
   
   console.log('Details of Manufacturer array are : ');
   
   // logic to populate the manufacturer array details based on id value
   for (let i = 0; i < test.length; i++) {
       console.log(test[i].id);
   }
   
   // to populate value on console

