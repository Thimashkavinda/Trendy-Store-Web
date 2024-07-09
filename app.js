let currentIndex = 0;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.sliderWrapper');
    const totalSlides = document.querySelectorAll('.sliderItem').length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Bags",
        price: 660,
        colors:[
            {
                code:"black",
                img: "./img/bg1.png"
            },
            {
                code: "darkblue",
                img: "./img/bg2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Sleepers",
        price: 660,
        colors:[
            {
                code:"black",
                img: "./img/bg1.png"
            },
            {
                code: "green",
                img: "./img/bg2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Bands",
        price: 660,
        colors:[
            {
                code:"black",
                img: "./img/bg1.png"
            },
            {
                code: "green",
                img: "./img/bg2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Shoes",
        price: 660,
        colors:[
            {
                code:"black",
                img: "./img/bg1.png"
            },
            {
                code: "green",
                img: "./img/bg2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Stationary Items",
        price: 660,
        colors:[
            {
                code:"black",
                img: "./img/bg1.png"
            },
            {
                code: "green",
                img: "./img/bg2.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".productColors");
const currentProductSizes = document.querySelector(".productSizes");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        chosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `$${chosenProduct.price}`;
        currentProductImg.src = chosenProduct.colors[0].img;
        
        // Clear and update colors
        currentProductColors.innerHTML = '';
        chosenProduct.colors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.style.backgroundColor = color.code;
            colorDiv.addEventListener('click', () => {
                currentProductImg.src = color.img;
            });
            currentProductColors.appendChild(colorDiv);
        });

        // Clear and update sizes
        currentProductSizes.innerHTML = '';
        const sizes = ["S", "M", "L", "XL"]; // Assuming these are the available sizes
        sizes.forEach(size => {
            const sizeDiv = document.createElement('div');
            sizeDiv.className = 'size';
            sizeDiv.textContent = size;
            currentProductSizes.appendChild(sizeDiv);
        });
    });
});
