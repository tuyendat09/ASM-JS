const container = document.querySelector(".container");
const signInButton = document.querySelector("#signIn");
const signUpButton = document.querySelector("#signUp");
console.log(signInButton);
console.log(signUpButton);

signInButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})

signUpButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})
