const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {                   
	container.classList.add("right-panel-active");
});
// addEventListener method to listen for a 'click' event on the signUpButton and signInButton.
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// -----------------------------------------------------------------signup and sign in page
