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
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      )
    );
  
    td_deals.append(
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      )
    );
  
    elect.append(
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      )
    );
  
    liq.append(
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      )
    );
  
    personal.append(
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      )
    );
  
    fre_f.append(
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
      ),
      makeItem(
        "Item 1",
        "https://naivas.online/nakuru-westside/88448-medium_default/morning-harvest-super-fast-oats-sachet-1kg.jpg",
        "Description of item 1",
        20
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
  
          // Remove Product List on Remove Button Click -- !DOES NOT WORK! --
          const removeBtn = document.querySelectorAll(".remove-product");
          removeBtn.forEach(function (rBtn) {
            rBtn.addEventListener("click", function () {
              cartItem.remove();
            });
          });
  
          // Update Total
          // showTotals();
        });
      });
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
  