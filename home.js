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
        <div class="card-content">
            <h2 class="card-title">${name}</h2>
            <p class="card-text">${desc}</p>
            <h3>Price: $${price}</h3>
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
                    otherProduct.style.transition = '0.5s ease-in' ;                   
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

     // <a href="#" class="btn">Add to cart <i class="fa-solid fa-cart-shopping"></i></a>


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







