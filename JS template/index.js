document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here


    // JavaScript code for dynamically creating item cards
    // Function to create a product card
    function makeItem(name, image, desc, price) {
        let item = document.createElement("div");
        item.classList.add("card");

        let html = `
        <img src="${image}" alt="${name}" class="card-img">
        <div class="card-content">
            <h2 class="card-title">${name}</h2>
            <p class="card-text">${desc}</p>
            <h3>Price: $${price}</h3>
            <a href="#" class="btn">Add to cart <i class="fa-solid fa-cart-shopping"></i></a>
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
});







