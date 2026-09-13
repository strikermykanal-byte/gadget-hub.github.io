const cartIds = getCart();
const cartContainer= document.getElementById('cart-container');
let total = 0;

if(cartIds.length === 0){
    cartContainer.innerHTML = `
    <div class = "empty-cart"
    <h2> Your cart is empty </h2>
    <p> Add some products to your cart! </p>
    <a href = "index.html"> Continue shopping </a>
    </div>
    `;

}else{
    cartIds.forEach(id => {
    const product = products.find(p=> p.id === id);
    if(!product) return;
    total += product.price;



    const item = document.createElement('div');
    item.className = "cart-item";
    item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}$</p>
        <button data-id="${product.id}" class="remove-btn">Remove</button>
    `;


    cartContainer.appendChild(item);
});
document.getElementById('cart-total').textContent = 'Total: ' +total + '$';
}
cartContainer.addEventListener('click',function(e){
   if (e.target.classList.contains('remove-btn')){
    const id = Number(e.target.dataset.id);
    removeFromCart(id);
    location.reload();
   }
});