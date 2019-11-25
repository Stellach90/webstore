const product0 = {
    imgsrc :`img/can6.jpg`,
    name: `Simply Nourish® Kitten Chicken Stew`,
    discription: `Simply Nourish® Shreds & Flake Stew Wet Cat Food - Natural, Grain Free`,
    flavor1: `Chicken`,
    flavor2: `Salmon`,
    flavor3: `Turkey`,
    size1: `32g`,
    size2: `79g`,
    size3: `none`,
    ins: `1.99`,
    del: `1.99`
  };


  const product1 = {
    imgsrc :`img/can5.jpg`,
    name: `Simply Nourish® Pate Wet Adult Cat Food`,
    discription: `Perfect choice nutritionally for your adult cat`,
    flavor1: `Salmon`,
    flavor2: `Shrimp`,
    flavor3: `Tuna & Shrimp`,
    size1: `32g`,
    size2: `79g`,
    size3: `none`,
    ins: `2.35`,
    del: `1.99`
  };

  const product2 = {
    imgsrc :`img/can4.jpg`,
    name: `Wellness® CORE® Tiny Tasters Wet Cat Food`,
    discription: `Based on the nutritional philosophy that cats, given their primal ancestry, thrive on a diet mainly comprised of meat`,
    flavor1: `Beef`,
    flavor2: `Tuna & Chicken`,
    flavor3: `Duck`,
    size1: `32g`,
    size2: `79g`,
    size3: ``,
    ins: `1.99`,
    del: `1.99`
  };

  const product3 = {
    imgsrc :`img/can3.jpg`,
    name: `Royal Canin® Feline Health Nutrition`,
    discription: `A uniquely balanced blend of vitamins and minerals promotes your pet's optimal health and wellness`,
    flavor1: `Sensitive Digestion`,
    flavor2: `Beauty Chunk`,
    flavor3: `Nutrition Chunk`,
    size1: `32g`,
    size2: `79g`,
    size3: `none`,
    ins: `1.89`,
    del: `1.99`
  };

  const product4 = {
    imgsrc :`img/can2.jpg`,
    name: `Authority® Advanced Wellness Shredded`,
    discription: `This delicious wet food features the great taste of chicken in each and every bite`,
    flavor1: `Mackerel`,
    flavor2: `Salmon`,
    flavor3: `Tuna`,
    size1: `32g`,
    size2: `79g`,
    size3: `none`,
    ins: `1.19`,
    del: `1.99`
  };

  const product5 = {
    imgsrc :`img/can1.jpg`,
    name: `CRAVE™ Perfect Portions Adult Cat Food`,
    discription: `Real chicken is the first ingredient, and this protein-rich recipe provides cats with energy and supports lean bodies`,
    flavor1: `Chicken`,
    flavor2: `Turkey`,
    flavor3: `Chicken & Beef`,
    size1: `32g`,
    size2: `79g`,
    size3: `none`,
    ins: `1.99`,
    del: `1.99`
  };


  function getProductAsHtmlString(product) {

    return `<article class="product">
    <div class="productimg"><a>
      <div class="sale" style="background-image: url(img/sale.png);"></div>
      <img src="${product.imgsrc}" alt="Product Image"></a></div>
    
    
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
        <data value="${product.ins}"><del>${product.del}</del> <ins><strong>${product.ins}</strong></ins></data>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span>Add to List</button>
      </footer>
    </form>
  </article>`;
  }

document.getElementById('products').innerHTML = getProductAsHtmlString(product5)
document.getElementById('products').innerHTML += getProductAsHtmlString(product4)
document.getElementById('products').innerHTML += getProductAsHtmlString(product3)
document.getElementById('products').innerHTML += getProductAsHtmlString(product2)
document.getElementById('products').innerHTML += getProductAsHtmlString(product1)
document.getElementById('products').innerHTML += getProductAsHtmlString(product0)