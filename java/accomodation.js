// Simple greeting based on time
window.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    const dateEl = document.getElementById('date');
    const now = new Date();
    const hours = now.getHours();

    let greeting = "Hello!";
    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    if (greetingEl) greetingEl.textContent = greeting;
    if (dateEl) dateEl.textContent = now.toDateString();

    // Simple form submission alert
    const orderForm = document.querySelector('form');
    if(orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = orderForm.querySelector('input[type="email"]').value;
            if(email) alert(`Thank you! Your order request has been sent to ${email}`);
            else alert("Please enter a valid email.");
        });
    }
});
