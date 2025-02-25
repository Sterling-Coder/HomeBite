// Carousel functionality
const carousel = {
    container: document.querySelector('.carousel-container'),
    items: [
        {
            image: 'Images/unsplash_MqT0asuoIcU.png',
            title: 'Home made pizza',
            price: '190',
            rating: '4.7',
            time: '50-79 min'
        },
        {
            image: 'Images/pexels-omar-mahmood-106343 1.png',
            title: 'Tandoori Chicken',
            price: '184',
            rating: '4.3',
            time: '15-29 min'
        },
        {
            image: 'Images/pexels-mumma-oyens-8799602 1.png',
            title: 'Chilli Chicken',
            price: '116',
            rating: '4.1',
            time: '30-45 min'
        }
    ],
    currentIndex: 0,

    init() {
        this.render();
        this.setupNavigation();
        this.updateActiveStates();
    },

    render() {
        this.container.innerHTML = this.items.map((item, index) => `
            <div class="carousel-item ${index === 1 ? 'active' : ''}">
                <img src="${item.image}" alt="${item.title}">
                <div class="carousel-content">
                    <h3>${item.title}</h3>
                    <p>₹${item.price}</p>
                    <div class="item-meta">
                        <span>★ ${item.rating}</span>
                        <span>${item.time}</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    setupNavigation() {
        document.querySelector('.carousel-prev').addEventListener('click', () => this.navigate(-1));
        document.querySelector('.carousel-next').addEventListener('click', () => this.navigate(1));
    },

    navigate(direction) {
        const itemWidth = this.container.querySelector('.carousel-item').offsetWidth;
        const gap = 20;
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.items.length - 3));
        this.container.style.transform = `translateX(-${this.currentIndex * (itemWidth + gap)}px)`;
        this.updateActiveStates();
    },

    updateActiveStates() {
        const items = this.container.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === this.currentIndex + 1) {
                item.classList.add('active');
            }
        });
    }
};

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

// Video Player Functionality
function playVideo() {
    const video = document.getElementById('promo-video');
    const thumbnail = document.querySelector('.thumbnail');
    const playButton = document.querySelector('.play-button');
    
    if (video.style.display === 'none') {
        // Switch to video and play
        video.style.display = 'block';
        thumbnail.style.display = 'none';
        video.play();
        playButton.classList.add('paused');
    } else {
        // If video is playing, pause it
        if (!video.paused) {
            video.pause();
            playButton.classList.remove('paused');
        } else {
            // If video is paused, play it
            video.play();
            playButton.classList.add('paused');
        }
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
    
    // Setup modal event listeners
    const cartButton = document.getElementById('cart-button');
    const requestDishButton = document.getElementById('request-dish-button');
    
    if (cartButton) {
        cartButton.addEventListener('click', () => openModal('cart-modal'));
    }
    
    if (requestDishButton) {
        requestDishButton.addEventListener('click', () => openModal('request-dish-modal'));
    }
    
    // Handle request form submission
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal('request-dish-modal');
        });
    }
});

// Home Kitchen Menu Items
const menuGrid = document.getElementById('menu-grid');
const menuItems = [
    { image: 'images/image1.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image2.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image3.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image4.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image5.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image6.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image7.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image8.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image9.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image10.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image11.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'images/image12.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' }
];

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <div class="image-wrapper">
            <div class="discount-badge">50%</div>
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="item-details">
            <h3>${item.title}</h3>
            <div class="price-rating">
                <span class="price">${item.price}</span>
                <span class="rating">${item.rating}</span>
            </div>
            <button class="add-button">+</button>
        </div>
    `;
    menuGrid.appendChild(menuItem);
});

const carouselContainer = document.querySelector('.carousel-container');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const items = [
    { image: 'path/to/image1.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'path/to/image2.jpg', title: 'Tandoori Chicken', price: '₹184', rating: '★4.3 | 15-29 min' },
    { image: 'path/to/image3.jpg', title: 'Chilli Chicken', price: '₹116', rating: '★4.1 | 30-45 min' },
    { image: 'path/to/image4.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'path/to/image5.jpg', title: 'Tandoori Chicken', price: '₹184', rating: '★4.3 | 15-29 min' },
    { image: 'path/to/image6.jpg', title: 'Chilli Chicken', price: '₹116', rating: '★4.1 | 30-45 min' },
    { image: 'path/to/image7.jpg', title: 'Home made pizza', price: '$19', rating: '★4.7 | 50-79 min' },
    { image: 'path/to/image8.jpg', title: 'Tandoori Chicken', price: '₹184', rating: '★4.3 | 15-29 min' },
    { image: 'path/to/image9.jpg', title: 'Chilli Chicken', price: '₹116', rating: '★4.1 | 30-45 min' }
    // Add more items as needed
];

let currentPosition = 0;

function updateCarousel() {
    const visibleItems = 3;
    const totalItems = items.length;
    const newPosition = -currentPosition * (100 / visibleItems) + '%';
    carouselContainer.style.transform = `translateX(${newPosition})`;
}

function createCarouselItems() {
    items.forEach(item => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p class="price">${item.price}</p>
                <p class="rating">${item.rating}</p>
            `;
        carouselContainer.appendChild(carouselItem);
    });
}

createCarouselItems();
updateCarousel(); // Initial update

carouselNext.addEventListener('click', () => {
    const visibleItems = 3;
    const totalItems = items.length;
    currentPosition = (currentPosition + 1) % Math.ceil(totalItems / visibleItems); // Loop back to start
    updateCarousel();
});

carouselPrev.addEventListener('click', () => {
    const visibleItems = 3;
    const totalItems = items.length;
    currentPosition = (currentPosition - 1 + Math.ceil(totalItems / visibleItems)) % Math.ceil(totalItems / visibleItems); // Loop back to end
    updateCarousel();
});

// Video Play/Pause
const video = document.getElementById('promo-video');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    playVideo();
});

video.addEventListener('click', () => { // Toggle on video click as well
    playVideo();
});

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playButton.textContent = "||"; // Change to pause icon (you can use a pause icon character)
    } else {
        video.pause();
        playButton.textContent = "▶"; // Change to play icon
    }
}

// Form Submission (Contact Form)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values (you can add more fields as needed)
    const name = contactForm.querySelector('[placeholder="Your Name"]').value;
    const email = contactForm.querySelector('[placeholder="Your e-mail"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Basic validation (you can add more robust validation)
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Here you would typically send the form data to a server
    // using fetch or XMLHttpRequest.  This is a placeholder:
    console.log("Form submitted:", { name, email, message });
    alert("Message sent! (Placeholder - no actual server submission)");

    contactForm.reset(); // Clear the form after submission
});


//Aman Rastogi  Manipal university Jaipur 219301546