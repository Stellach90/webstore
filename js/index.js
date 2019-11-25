const product0 = {
    name: `3D Visualization`,
    discription: `INTR1111`,
    flavor1: { firstname: `Ryan`, lastname: `Bailey`  },
    flavor2: `Fall 2019`,
    flavor3: 15,
    size1: `Yes`,
    size2: `3hr, 0min`
    size3:
    ins:
    del:
  };


  function getProductAsHtmlString(product) {

    return `<article class="product">
    <div class="productimg"><a>
      <div class="sale" style="background-image: url(img/sale.png);"></div>
      <img src="img/can1.jpg" alt="Product Image"></a></div>
    
    
    <h3><a>${product.name}</a></h3>
    <p>${product.discription}</p>
    <form>
      <fieldset>
        <legend>Colours</legend>
        <ul>
          <li><label><input type="radio" name="Flavor" value="${product.flavor1}"> <span>${product.flavor1}</span></label></li>
          <li><label><input type="radio" name="Flavor" value="${product.flavor2}"> <span>${product.flavor2}</span></label></li>
          <li><label><input type="radio" name="Flavor" value="${product.flavor3}"> <span>${product.flavor3}</span></label></li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Sizes</legend>
        <ol>
            <li><label><input type="radio" name="size" value="${product.size1}g"> <span>${product.size1}</span></label></li>
            <li><label><input type="radio" name="size" value="${product.size2}g"> <span>${product.size2}</span></label></li>
            <li><label><input type="radio" name="size" value="${product.size3}g"> <span>${product.size3}</span></label></li>
        </ol>
      </fieldset>

      <footer>
        <dl>
          <dt>Rating</dt>
          <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <data value="${product.ins}"><del>${product.del}</del> <ins>${product.ins}</ins></data>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span>Add to List</button>
      </footer>
    </form>
  </article>`;
  }
document.getElementById('products').innerHTML = getProductAsHtmlString(product2)
document.getElementById('products').innerHTML += getProductAsHtmlString(product1)
document.getElementById('products').innerHTML += getProductAsHtmlString(product0)