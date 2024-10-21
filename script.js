document.addEventListener('DOMContentLoaded', () => {
    const burgers = [
        { name: 'Exploding Deluxe', image: 'images/b8a75e580a202cce7ac6bc3693e96672.jpg' },
        { name: 'Double Trouble', image: 'images/pngtree-burger-food-png-free-download-png-image_10199386.png' },
        { name: 'Classic Simplicity', image: 'images/pngtree-fast-food-big-ham-burger-png-image_6244235.png' },
        { name: 'Flavor Explosion', image: 'images/flying-burger-png-image-11703439315ejd1m52khw.png' },
    ];

    const activeBurger = document.getElementById('active-burger');
    const burgerButtons = document.querySelectorAll('.burger-button');

    burgerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            activeBurger.src = burgers[index].image;
            activeBurger.alt = burgers[index].name;
            activeBurger.style.transform = 'scale(1.2)';
            setTimeout(() => {
                activeBurger.style.transform = 'scale(1)';
            }, 500);
        });
    });
});