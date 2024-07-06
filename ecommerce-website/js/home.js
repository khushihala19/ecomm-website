
//slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); 
}

// all product

let iteams = [
    {
        id: "1",
        title: "Analog Numeral ",
        description: "Baggit",
        price: "$750",
        image: "image/watch1.png",
        button: `<a href="#" class="btn" id="Cart">Add to Card</a>`,
    },
    {
        id: "2",
        title: "Black Numeral Dial ",
        description: "Timzee",
        price: "$200",
        image: "image/watch12.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },
    {
        id: "3",
        title: "Golden Automatic ",
        description: " Fostelo",
        price: "$200",
        image: "image/watch18.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },
    {
        id: "4",
        title: "Golden Classical ",
        description: " Ex of Sale Tax.",
        price: "$301",
        image: "image/watch15.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },
    {
        id: "5",
        title: " Analog Automatic ",
        description: "Timzee",
        price: "$201",
        image: "image/watch5.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },
    {
        id: "6",
        title: "Platinum Numeral",
        description: "FOstelo",
        price: "$200",
        image: "image/watch21.png",
        button: `<a href="#" class="btn">Add to Card</a>`,

    },
    {
        id: "7",
        title: "Dial Numeral",
        description: "BiltWell",
        price: "$400",
        image: "image/watch7.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },
    {
        id: "8",
        title: "Stainless steel",
        description: " Baggit",
        price: "$200",
        image: "image/watch6.png",
        button: `<a href="#" class="btn">Add to Card</a>`,
    },

]

iteams.forEach((val, index) => {
    let product_iteams = document.getElementById("add");
    let div = document.createElement("div");
    let title = document.createElement("h5");
    let disc = document.createElement("p");
    let price = document.createElement("price");
    let img = document.createElement("img");
    let btn = document.createElement("button");

    div.classList = "product-body";

    title.innerHTML = val.title;
    title.classList = "product-title";

    disc.innerHTML = val.description;
    disc.classList = "product-text";

    price.innerHTML = val.price;
    price.classList = "product-price";

    img.src = val.image;
    img.classList = "product-img";

    btn.innerHTML = val.button;

    div.append(img);
    div.append(title);
    div.append(disc);
    div.append(price);
    div.append(btn);

    product_iteams.append(div);
})

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Get the existing cart from local storage or initialize an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        // If the item exists, increase the quantity
        existingItem.quantity++;
    } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can display a message or update the cart UI
    alert(`${productName} added to cart`);
}
