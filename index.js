class Breakfast {
    constructor (food, drink) {
        this.food = food; 
        this.drink = drink;
    }
    combination() {
        return `Yum! ${this.food} and ${this.drink} are a great combo!`
    }
}
class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad; 
        this.soup = soup; 
        this.drink = drink; 
    }
}
class Dinner {
    constructor (salad, soup, entree, dessert) {
        this.salad = salad; 
        this.soup = soup; 
        this.entree = entree; 
        this._dessert = dessert; 
    }
}

let smoothie = new Breakfast('strawberry', 'almond milk'); 
console.log(smoothie); 
console.log(smoothie.combination);