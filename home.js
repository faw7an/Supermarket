document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
  
    // JavaScript code for dynamically creating item cards
    // Function to create a product card
    function makeItem(name, image, desc, price) {
      let item = document.createElement("div");
      item.classList.add("card");
  
      let html = `
          <div class="card-wrap">
          <img src="${image}" alt="${name}" class="card-img">
          <div class="card-content" style="background-color:#F6F5F5">
          <div>
              <h2 class="card-title">${name}</h2>
              <p class="card-text">${desc}</p>
          </div>
  
          <h3 class="price" style="color:#63AC96">KES ${price}.00</h3>
          <button class="mainBtn">ADD TO CART</button>
          
          </div>
          </div>
      `;
  
      item.innerHTML = html;
      return item;
    }
  
    //  <button class="plusBtn">+</button>
    //  <button class="minusBtn">-</button>
  
    // Get the container element
    let ft_prod = document.getElementById("ft-prod");
    let td_deals = document.getElementById("td-deals");
    let elect = document.getElementById("elect");
    let personal = document.getElementById("personal");
    let liq = document.getElementById("liq");
    let fre_f = document.getElementById("fre-f");
  
    // Append product cards to the container
    ft_prod.append(
      makeItem(
        "Oats Morning harvest",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "",
        20
      ),
      makeItem(
        "Bio greek yogurt",
        "https://naivas.online/water-front/104043-medium_default/bio-greek-vanilla-yoghurt-200ml.jpg",
        "",
        150
      ),
      makeItem(
    "Mika kettle",
        "https://naivas.online/water-front/101165-medium_default/mika-kettle-17l-plastic-corded-open-element-cream-white-blackmkt1002wb.jpg",
        "",
        150
      ),
      makeItem(
        "Sollatek fridge guard",
        "https://naivas.online/water-front/87289-medium_default/sollatek-fridge-guard-06-amps.jpg",
        "",
        1500
      )
    );
  
    td_deals.append(
      makeItem(
        "Hand mixer",
        "https://naivas.online/water-front/87382-medium_default/ramtons-hand-mixer-rm382.jpg",
        "",
        1200
      ),
      makeItem(
        "Instant shower ballo",
        "https://naivas.online/water-front/87269-medium_default/lorenzetti-instant-shower-bello-banho-ultra.jpg",
        "",
        4370
      )
    );
  
    elect.append(
      makeItem(
        "Water dispenser",
        "https://naivas.online/water-front/101013-medium_default/von-vadz0002k-portable-water-dispenser.jpg",
        "",
        3400
      ),
      makeItem(
        "Mika steam iron",
        "https://naivas.online/water-front/101224-medium_default/mika-steam-iron-non-stick-soleplate-white-blue-1600wmsti405.jpg",
        "",
        3200
      ),
      makeItem(
        "Go-Tv decorder",
        "https://naivas.online/water-front/87287-medium_default/gotv-decoder.jpg",
        "",
        2200
      ),
      makeItem(
        "50-inch smart TV",
        "https://naivas.online/water-front/101002-medium_default/lg-50uq75006lg-50-inches-4k-smart-led-tv.jpg",
        "",
        75730
      )
    );
  
    liq.append(
      makeItem(
        "Kumla merlot",
        "https://naivas.online/water-front/97147-medium_default/kumala-merlot-750ml.jpg",
        "",
        1595
      ),
      makeItem(
        "Gato negro",
        "https://naivas.online/water-front/101874-medium_default/gato-negro-sweet-muscato-750ml.jpg",
        "",
        1320
      ),
      makeItem(
        "Kumala chandoney",
        "https://naivas.online/water-front/101874-medium_default/gato-negro-sweet-muscato-750ml.jpg",
        "",
        1537
      ),
      makeItem(
        "Perdeberg Merlot",
        "https://naivas.online/water-front/97143-medium_default/perdeberg-merlot-750ml.jpg",
        "",
        2450
      )
    );
  
    personal.append(
      makeItem(
        "Nivea deep men roll-on",
        "https://naivas.online/water-front/85039-medium_default/nivea-deep-men-roll-on-50ml.jpg",
        "",
        650
      ),
      makeItem(
        "Vaseline baby petroleum jelly",
        "https://naivas.online/water-front/96393-medium_default/vaseline-baby-petroleum-jelly-250ml.jpg",
        "",
        260
      ),
      makeItem(
        "Always maxi-thin long",
        "https://naivas.online/water-front/84099-medium_default/always-maxi-thin-long-duo-32-pieces.jpg",
        "",
        485
      ),
      makeItem(
        "Colgate toothpaste",
        "https://naivas.online/water-front/96884-medium_default/colgate-toothpaste-total-12-clean-mint-75ml.jpg",
        "",
        510
      )
    );
  
    fre_f.append(
      makeItem(
        "Kunde bunch",
        "https://naivas.online/water-front/104712-medium_default/kunde-bunch.jpg",
        "",
        35
      ),
      makeItem(
        "Goat leg steaks",
        "https://naivas.online/water-front/89378-medium_default/naivas-goat-leg-steaks-500g.jpg",
        "",
        799
      ),
      makeItem(
        "Rabbit meat",
        "https://naivas.online/water-front/89379-medium_default/naivas-rabbit-meat-500g.jpg",
        "",
        690
      ),
      makeItem(
        "White cremini mushrooms",
        "https://naivas.online/water-front/103771-medium_default/white-cremini-mushrooms-500g.jpg",
        "",
        599
      )
    );
  
    // hover effect
  
    const productContainers = document.querySelectorAll(".card");
  
    productContainers.forEach((product) => {
      product.addEventListener("mouseover", () => {
        productContainers.forEach((otherProduct) => {
          if (otherProduct !== product) {
            otherProduct.style.opacity = 0.5;
            otherProduct.style.transition = "0.5s ease-in";
          }
        });
      });
  
      product.addEventListener("mouseout", () => {
        productContainers.forEach((otherProduct) => {
          otherProduct.style.opacity = 1;
        });
      });
    });
  
    // checkout section
    const cartCheckOut = document.querySelector(".cart-checkout");
    const cart = document.querySelector(".cart");
    const overlay = document.querySelector(".overlay");
  
    // Insert Product Item Into Cart as a List Item
    const cartList = document.querySelector(".cart-list");
  
    const cartCheckOutClassList = cartCheckOut.classList;
    console.log(cartCheckOutClassList);
  
    cart.addEventListener("click", (e) => {
      e.preventDefault();
      cartCheckOut.classList.add("open");
      overlay.classList.add("open");
    });
  
    function closingCheckout() {
      if (cartCheckOutClassList.contains("open")) {
        cartCheckOut.classList.remove("open");
        overlay.classList.remove("open");
      }
    }
  
    const cartClose = document.querySelector(".cart-close");
    cartClose.addEventListener("click", function (e) {
      e.preventDefault();
      closingCheckout();
    });
  
    overlay.addEventListener("click", (e) => {
      closingCheckout();
    });
  
  // Add to Cart Functionality
function addToCart(btnElements) {
  btnElements.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      // Fetch the closest parent card
      let card = event.target.closest(".card");

      // Fetch Image
      let imgPath = card.querySelector(".card-img").src;

      // Fetch Product Name
      let productName = card.querySelector(".card-title").textContent;

      // Fetch Product Cost
      let productCost = card.querySelector(".price").textContent;
      let finalPrice = productCost.slice(4).trim(); // slice(4) to remove "KES "

      // Initialize Item Description
      const item = {};
      item.img = imgPath;
      item.name = productName;
      item.price = finalPrice;

      // Create the List Item
      const cartItem = document.createElement("li");
      cartItem.classList.add("product-cart-item");
      cartItem.innerHTML = `
              <img src="${item.img}" alt="" class="cart-img">
              <div class="cart-text">
                  <h3> ${item.name} </h3>
                  <p class="price">KES ${item.price}</p>
              </div>
              <i class="fas fa-times remove-product"></i> 
          `;

      // Insert Product Item Into Cart as a List Item
      const cartList = document.querySelector(".cart-list");
      // Before adding an item to the cart list first console log to confirm the item details
      console.log(item);
      cartList.appendChild(cartItem);
      alert("Item added to cart.");

      // Update Total
      calculateTotal();

      // Remove Product List on Remove Button Click
      const removeBtn = document.querySelectorAll(".remove-product");
      removeBtn.forEach(function (rBtn) {
        rBtn.addEventListener("click", function () {
          cartItem.remove();
          // Update Total
          calculateTotal();
        });
      });
    });
  });
}

function calculateTotal() {
  // Get all the prices from the cart items
  let prices = Array.from(document.querySelectorAll('.product-cart-item .price')).map(priceElement => parseFloat(priceElement.textContent.slice(4)));

  // Calculate the subtotal
  let subtotal = prices.reduce((total, price) => total + price, 0);

  // Display the subtotal
  document.querySelector('.sub-totalCalc').textContent = subtotal.toFixed(2);

  // Since delivery is free, the total is the same as the subtotal
  document.querySelector('.totalCal').textContent = subtotal.toFixed(2);
}

const addtocartButtons = document.querySelectorAll(".mainBtn");

addToCart(addtocartButtons);
  
    // search bar
  
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
  
    searchBtn.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm !== "") {
        // Perform search operation or redirect to search results page
        alert("Searching for: " + searchTerm);
        window.location.href = `results.
                  html?search=${searchTerm}`;
      } else {
        alert("Please enter a search term.");
      }
    });
  
    // Enable pressing 'Enter' key to trigger search
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  
    // filter by category
    const filterBtns = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".card");
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;
  
        productCards.forEach((card) => {
          if (category === "all") {
            card.style.display = "block";
          } else {
            if (card.classList.contains(category)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          }
        });
      });
    });
  });
  