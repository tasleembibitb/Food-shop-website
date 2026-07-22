
// Prices for the menu items in RS (Rupees)
const menuPrices = {
   pizza: 100.00,
    burger: 80.00,
    pasta: 150.00,
    biryani: 120.00,
    juice: 50.00,
    colddrinks: 30.00
};

// Handle the 'Order Now' button click event
document.getElementById('order-btn').addEventListener('click', () => {
    const menuOptions = `Available food items:\n
1. Pizza - RS ${menuPrices.pizza.toFixed(2)}\n
2. Burger - RS ${menuPrices.burger.toFixed(2)}\n
3. Pasta - RS ${menuPrices.pasta.toFixed(2)}\n
4. Biryani - RS ${menuPrices.biryani.toFixed(2)}\n
5. Juice - RS ${menuPrices.juice.toFixed(2)}\n
6. Cold Drinks - RS ${menuPrices.colddrinks.toFixed(2)}`;

    const userOrder = prompt(`What food would you like to order?\n${menuOptions}\nPlease type the name of the food (e.g., Pizza)`);

    if (userOrder) {
        const lowerCaseOrder = userOrder.toLowerCase();

        if (menuPrices[lowerCaseOrder] !== undefined) {
            const orderPrice = menuPrices[lowerCaseOrder];
            alert(`Thank you for ordering ${userOrder}. The total price is RS ${orderPrice.toFixed(2)}. Your order will be processed shortly.`);
        } else {
            alert("Sorry, we don't have that item on the menu. Please choose from the available options.");
        }
    } else {
        alert("You didn't place any order.");
    }
});

// Handle the Contact Us form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation for empty fields
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all the fields.');
    } else {
        // Display a confirmation message to the user
        alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email}.`);
        
        // Optionally, clear the form after submission
        contactForm.reset();
    }
});
