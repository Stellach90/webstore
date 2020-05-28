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


let numItemsInCart = input.value;

function addOneToCart() {
    numItemsInCart += 1;
    document.getElementById(`cartNum`).innerHTML = `${numItemsInCart}`;
}

document.getElementById(`addOne`).addEventListener('click', addOneToCart);


function addOneToList(){
  document.getElementById(`listNum`).innerHTML = `favorite`;
  alert(`1 item added to Wish List`)
}

document.getElementById(`addList`).addEventListener('click',addOneToList);