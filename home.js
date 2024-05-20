document.addEventListener('DOMContentLoaded', function () {
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
            <div class="main">
            <div class="btnCart">
                <button class="minusBtn">-</button>
                <button class="mainBtn">ADD TO CART</button>
                <button class="plusBtn">+</button>
            </div>
        </div>
        </div>
        </div>
    `;

        item.innerHTML = html;
        return item;
    }


    // Get the container element
    let ft_prod = document.getElementById('ft-prod');
    let td_deals = document.getElementById('td-deals');
    let elect = document.getElementById('elect');
    let personal = document.getElementById('personal');
    let liq = document.getElementById('liq');
    let fre_f = document.getElementById('fre-f');

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

    const productContainers = document.querySelectorAll('.card');

    productContainers.forEach(product => {
        product.addEventListener('mouseover', () => {
            productContainers.forEach(otherProduct => {
                if (otherProduct !== product) {
                    otherProduct.style.opacity = 0.5;
                    otherProduct.style.transition = '0.5s ease-in';
                }
            });
        });

        product.addEventListener('mouseout', () => {
            productContainers.forEach(otherProduct => {
                otherProduct.style.opacity = 1;
            });
        });
    });

    // ADD TO CART JS
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('mainBtn')) {
            const btn = event.target;
            const mbtn = btn.previousElementSibling;
            const pbtn = btn.nextElementSibling;

            if (btn.innerText === 'ADD TO CART') {
                btn.innerText = 1;
                pbtn.style.display = 'inline-block';
                mbtn.style.display = 'inline-block';
            }
        }

        if (event.target.classList.contains('minusBtn')) {
            const mbtn = event.target;
            const btn = mbtn.nextElementSibling;
            const pbtn = btn.nextElementSibling;

            if (btn.innerText == 5) {
                pbtn.style.display = 'inline-block';
            }
            if (btn.innerText < 2) {
                btn.innerText = 'ADD TO CART';
                pbtn.style.display = 'none';
                mbtn.style.display = 'none';
            } else {
                btn.innerText = btn.innerText - 1;
            }
        }

        if (event.target.classList.contains('plusBtn')) {
            const pbtn = event.target;
            const btn = pbtn.previousElementSibling;
            const mbtn = btn.previousElementSibling;

            btn.innerText = +(btn.innerText) + 1;

            if (btn.innerText == 5) {
                pbtn.style.display = 'none';
            }
        }
    });

    // const navSnippet = document.querySelector('.nav-snippet');

    // function navInteract() {
    //     window.addEventListener('scroll', () => {
    //         navSnippet.style.position = 'fixed';
    //     });
    // }

    // Call the function to set up the scroll event listener
    // navInteract();

    // checkout section
    const cartCheckOut = document.querySelector('.cart-checkout');
    const cart = document.querySelector('.cart');
    // cart.addEventListener('click', function () {
    //     event.preventDefault();
    //     cartCheckOut.style.transition = 'transform 1s ease';
    //     cartCheckOut.style.transform = 'translateX(0px)';
    //     cartCheckOut.style.display = 'block';


    // });

    const overlay = document.querySelector(".overlay");

    const cartCheckOutClassList = cartCheckOut.classList;
    console.log(cartCheckOutClassList)
    
    cart.addEventListener('click', (e) => {
        e.preventDefault()
        cartCheckOut.classList.add("open");
        overlay.classList.add("open")
    } )
    
    function closingCheckout(){
           
        if(cartCheckOutClassList.contains("open")) {
            cartCheckOut.classList.remove("open");
            overlay.classList.remove("open")
        }
    }
    
    const cartClose = document.querySelector('.cart-close');
    cartClose.addEventListener('click', function (e) {
        e.preventDefault();
        closingCheckout();
     
    });

    overlay.addEventListener("click", (e) => {
        closingCheckout();

    })
    // slider();

    // if(slider){
    //     cartCheckOut.style.display = 'none';
    //     // cartCheckOut.style.display = 'none';

    // } else{
    //     cartCheckOut.style.display = 'block';
    // }



    (function () {

        // Adding the Product Item
        const addtocart = document.querySelectorAll(".btnCart");
        addtocart.forEach (function (btn) {
            btn.addEventListener('click', function(event) {
    
                // Fetch Image 
                let imgPath = event.target.parentElement.previousElementSibling.children[0].src;
               
                // Fetch Product Name
                let productName = event.target.previousElementSibling.previousElementSibling.textContent;
    
                // Fetch Product Cost
                let productCost = event.target.previousElementSibling.textContent;
                let finalPrice = productCost.slice(3).trim();
    
                // Initialize Item Description
                const item = {};
                    item.img = imgPath;
                    item.name = productName;
                    item.price = finalPrice;
    
                // Create the List Item
                const cartItem = document.createElement('li');
                cartItem.classList.add('product-cart-item');
                cartItem.innerHTML = `
                    <img src="${item.img}" alt="" class="cart-img">
                    <div class="cart-text">
                        <h3> ${item.name} </h3>
                        <p class="price">KES ${item.price}</p>
                    </div>
                    <i class="fas fa-times remove-product"></i> 
                `;
    
                // Insert Product Item Into Cart as a List Item
                const cartList = document.querySelector('.cart-list'); 
                cartList.appendChild(cartItem); 
                alert('Item added to cart.');
    
                // Remove Product List on Remove Button Click -- !DOES NOT WORK! --
                const removeBtn = document.querySelectorAll('.remove-product')
                removeBtn.forEach (function (rBtn) {
                    rBtn.addEventListener('click', function () {
                        cartItem.remove();
                    });
                }); 
    
                // Update Total
                // showTotals();
    
            });
        });
    });




    // search bar


    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            // Perform search operation or redirect to search results page
            alert('Searching for: ' + searchTerm);
            window.location.href = `results.
                html?search=${searchTerm}`;
        } else {
            alert('Please enter a search term.');
        }
    });

    // Enable pressing 'Enter' key to trigger search
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });


    // filter by category
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            productCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.classList.contains(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });



});



