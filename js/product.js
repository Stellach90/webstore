let btnAdd = document.getElementById('add')
let btnSub = document.getElementById('substract')
let input = document.querySelector('input')
let countque = input.innerHTML


// btnAdd.addEventListener('click', () =>{
//     input.value = parseInt(input.value) + 1;
// });

// btnSub.addEventListener('click', () =>{
//     input.value = parseInt(input.value) - 1;
// });


// let numItemsInCart = input.value;

// function addOneToCart() {
//     numItemsInCart += 1;
//     document.getElementById(`cartNum`).innerHTML = `${numItemsInCart}`;
// }

// document.getElementById(`addOne`).addEventListener('click', addOneToCart);


// function addOneToList(){
//   document.getElementById(`listNum`).innerHTML = `favorite`;
//   alert(`1 item added to Wish List`)
// }

// document.getElementById(`addList`).addEventListener('click',addOneToList);


const products = [
  {
  imgsrc :`img/can1.jpg`,
  name: `CRAVE™ Perfect Portions Adult Cat Food`,
  discription: `Real chicken is the first ingredient, and this protein-rich recipe provides cats with energy and supports lean bodies`,
  brandname: `Crave`,
  priceSale: 1.99,
  priceRegular: `2.11`,
  size: `2oz`,
  flavor: `Chicken`
}]

function getProductAsHtmlString(product){
  return `<article class="product">
    
    <h2>${product.name}</h2>
    <a class="brand">${product.brandname}</a>
    <form class="disappear">
      <section>
        <dl class="t_r">
          <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <div class="buy">
          <div class="priceinfo">
          <data value="${product.priceSale}">
          <del>${product.priceRegular}</del> <ins><strong>${product.priceSale}</strong></ins></div>
          <div class="tasteinfo">
          <span>Size : ${product.size}</span>
          <span>Flavor : ${product.flavor}</span></div>
        </data>
        </section>
        <section>
        <div>
        <h4>Promotion : 6 for $11</h4>
        <div class="bottons"><a>Add to wish list<button type="button" onclick = "addOneToList()" id="addList"><span class="material-icons">favorite</span></button></a>
        <a>Add to cart<button type="button" onclick = "addOneToCart()" id="addOne"><span class="material-icons">add_shopping_cart</span></button></a>
        </div>
        <div class="subscribe">
        <select id="subscription" name="subscription">
        <option value="Every 1 week">Every 1 week</option>
        <option value="Every 2 week">Every 2 weeks</option>
        <option value="Every 3 week">Every 3 weeks</option>
        <option value="Every 4 week">Every 4 weeks</option>
        <option value="Every 5 week">Every 5 weeks</option>
        <option value="Every 6 week">Every 6 weeks</option>
        <option value="Every 7 week">Every 7 weeks</option>
        <option value="Every 8 week">Every 8 weeks</option>
        <option value="Every 9 week">Every 9 weeks</option>
        </select>
        <label for="subscription">Subscription & Save</label></div>
        </div>
        </div>
      </section>
    </form>
  </article>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlproducts = arrToRender.map(getProductAsHtmlString);

  document.getElementById('product_info').innerHTML = arrOfHtmlproducts;
}

renderProducts(products);