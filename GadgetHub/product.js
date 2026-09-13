const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const query = params.get('query');
let product= null;
if(id){
    product = products.find(p => p.id === id);

}else if(query){
    product = products.find(p => p.name .toLowerCase()===query.toLowerCase().trim());
}
    if(product){
        document.getElementById('add-to-cart-btn').addEventListener('click',function(){
            addToCart(product.id);
            alert(product.name + ' Added!')
        })
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price + "$";
        document.getElementById('product-description').textContent = product.description;


    }else{
        document.body.innerHTML = '<p style="text-align:center; font-size: 24px; margin-top: 50px;">Product not found</p>';
    }


