const form = document.getElementById("productForm");

const productName = document.getElementById("productName");
const price = document.getElementById("price");
const category = document.getElementById("category");

const productContainer = document.getElementById("productContainer");

let products = [];

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const product = {
        name: productName.value,
        price: price.value,
        category: category.value
    };

    products.push(product);

   
    productContainer.innerHTML = "";

    products.forEach((product) => {

    
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productContainer.appendChild(card);
    });

    form.reset();
});