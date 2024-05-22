/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
    id:number;
    name:number;
    price:number;
}


function constructor(id:number,name:string,price:number){
    this.id = id;
    this.name = name;
    this.price
};

function getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  };
getProductInfo()

  const product1 = new Product();
console.log(product1.id);


/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class MyClassPrivate {
  private secret: string;

  constructor(secret: string) {
      this.secret = secret;
  }

  revealSecret() {
      console.log(this.secret); // Accessing the private property from within the class
  }
}

/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

class ProductExAccessors {
  // 'private' property
  private _price: number;

  constructor(private id: number, private name: string) {
    this._price = 0; // Default price
  }

  // 'public' getter for price
  get price(): number {
    return this._price;
  }

  // 'public' setter for price
  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log("Price cannot be negative.");
    }
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
  }
}

// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors(1, "Widget");

console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0

// Use the 'setter' to update the price
productEx.price = 20.0;

console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20

// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.


/************************
 * CLASS STATIC MEMBERS *
 ************************/

class ProductStaticMembers {
  // 'private' property
  private static nextId: number = 1;

  constructor(private id: number, private name: string) {}

  static generateNextId(): number {
    return ProductStaticMembers.nextId++;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Widget"
);
const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Gadget"
);

console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget


/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class AbstractItem {
  private static nextId: number = 1;

  constructor(public id: number, protected name: string) {}

  static generateNextId(): number {
    return AbstractItem.nextId++;
  }

  abstract getItemInfo(): string;
}

class Item extends AbstractItem {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getItemInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget