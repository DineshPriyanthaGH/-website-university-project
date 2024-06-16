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
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cart-item').remove();
        updateSummary();
    });
});

document.querySelectorAll('#quantity').forEach(input => {
    input.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
        updateSummary();
    });
});

function updateSummary() {
    let subtotal = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-details p:nth-child(3)').textContent.replace('Price: $', ''));
        const quantity = parseInt(item.querySelector('#quantity').value);
        subtotal += price * quantity;
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.querySelector('.cart-summary p:nth-child(2)').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector('.cart-summary p:nth-child(3)').textContent = `Tax: $${tax.toFixed(2)}`;
    document.querySelector('.cart-summary p:nth-child(4)').textContent = `Total: $${total.toFixed(2)}`;
}
