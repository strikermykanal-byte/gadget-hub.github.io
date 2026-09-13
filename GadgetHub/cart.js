function addToCart(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function removeFromCart(id){
    let cart = getCart();
    cart = cart.filter(itemId => itemId !==id);
    localStorage.setItem('cart', JSON.stringify(cart));
}
