var cart = {
   debug: true,
   state: {
      itemTotal:0,
      products: fetchLocalStorage("cart")
   },
   setProduct (number,valueB) {
      this.debug && console.log('setProduct triggered'+this.state.products);
      //this.state.products = value;
      this.state.products[number] = valueB;
      this.saveLocalStorage("cart", this.state.products);
   },
   addProduct (value) {
      this.debug && console.log('addProduct triggered'+this.state.products);
      this.state.products.push(value);
      this.saveLocalStorage();
   },
   saveLocalStorage(){
     localStorage.setItem("cart", JSON.stringify(this.state.products));
     console.log("SAVE item!!!");
   },
   productCount(){
      var products = cart.state.products,
          counter = 0;

      for (var i = 0; i < products.length; i++) {
         counter += products[i].quantity;
      }

      return counter;
   }

}

// Functie ophalen van localstorage
function fetchLocalStorage(key) {
   // kijken of localstorage gevuld is met data van de cart.
   if(localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
   } else {
      // is het leeg, stuur lege array terug
      return [];
   }
}


export default cart;
