// Write your code here
// Class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Class for Dinner
  class Dinner {
    #dessert; // Private field for dessert
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert; // Assign to private field
    }
  
    // Getter for the private dessert field
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Creating instances
  let breakfast1 = new Breakfast("Pancakes", "Coffee");
  let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
  let dinner1 = new Dinner("Greek Salad", "Minestrone", "Steak", "Cheesecake");
  
  // Accessing the instances
  console.log(breakfast1); // => Breakfast { food: 'Pancakes', drink: 'Coffee' }
  console.log(lunch1);     // => Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  console.log(dinner1);    // => Dinner { salad: 'Greek Salad', soup: 'Minestrone', entree: 'Steak' }
  
  // Accessing the private dessert property using the getter
  console.log(dinner1.getDessert()); // => Cheesecake
  