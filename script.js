$(document).ready(function() {
   // form submission and prompts to the user
    $("#text-center").submit(function(event) {
        //user input
        function flavor() {
            var pizzaFlavour = document.getElementById("flavor").value;
            return parseInt(pizzaFlavour);
        }

        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }

        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }

        function topping() {
            var pizzaTopping = document.getElementById("topping").value;
            return parseInt(pizzaTopping);
        }

        function number() {
            var pizzaNumber = document.getElementById("quantity").value;
            return parseInt(pizzaNumber);
        }

        //a constructor to create objects of a user's orders
        function Order(flavor, size, crust, topping, quantity) {
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = quantity;
        }

        //an object to save the users order
        var userInput = new Order(flavor(), size(), crust(), topping(), number());

        //a variable to store the total expenditure of the user
        var totalCost =
            (userInput.newSize +
                userInput.newCrust +
                userInput.newTopping +
                userInput.newFlavor) *
            userInput.newQuantity;

        //prompts for the user
        alert("Your charges for Pizza" + totalCost);
        prompt("enter your email address");
        prompt("enter your phone number");
        prompt("enter your location");
        alert("Your pizza will be delivered");


        $("#text-center").reset();

        event.preventDefault();
    });
});
