const container = document.querySelector('.product-container');
products.forEach((product, index) => {
    const card = document.createElement('a');

    const className = 'product-card';

    card.className = 'product-card';

    card.href = `product.html?id=${product.id}`;

    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `<img src="${product.image}" alt="${product.name}">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}$</p>
    `;

    container.appendChild(card);



})
