const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const dropdownButton = document.querySelectorAll('.dropdownButton');
const dropdownMenu = document.querySelectorAll('.footer__links__dropdown__menu');

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener("click", function() {
        dropdownMenu[i].classList.toggle("active");
        console.log('KRL!');
    });
}
