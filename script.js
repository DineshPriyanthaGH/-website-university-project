(function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }



    setInterval(() => {
        plusSlides(1);
    }, 5000); // Change image every 5 seconds

    let dots = document.getElementsByClassName("dot");
    for (let j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", function() {
            currentSlide(j + 1);
        });
    }
})();


let slideIndex = 2;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides-2343");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    alert(`Thank you for subscribing with ${email}!`);
   
});
}
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const productElement = event.target.closest('.pro');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');
            const productImage = productElement.getAttribute('data-image');

            const existingProductIndex = cart.findIndex(item => item.id === productId);
            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                const product = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                };
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartIcon();
        });
    });

    function updateCartIcon() {
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = cartCount;
    }

    updateCartIcon();
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: Rs.${item.price}</p>
                    <label for="quantity-${item.id}">Quantity:</label>
                    <input type="number" id="quantity-${item.id}" name="quantity" value="${item.quantity}" min="1">
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItem);
            subtotal += item.price * item.quantity;
        });

        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        document.querySelector('.subtotal').textContent = subtotal.toFixed(2);
        document.querySelector('.tax').textContent = tax.toFixed(2);
        document.querySelector('.total').textContent = total.toFixed(2);
    }

    cartItemsContainer.addEventListener('change', event => {
        if (event.target.name === 'quantity') {
            const id = event.target.id.replace('quantity-', '');
            const quantity = parseInt(event.target.value);
            const cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        }
    });

    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item')) {
            const id = event.target.getAttribute('data-id');
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        }
    });

    renderCart();
    
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
});
