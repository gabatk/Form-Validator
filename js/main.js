const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const popup = document.querySelector('#popup');

const showError = (input, msg) => {
	// argument input przechowuje nasze pojedyncze INPUTy;
	// argument MSG przechowuje placeholder;

	const formBox = inputValue.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('.error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = inputValue.parentElement;
	formBox.classList.remove('.error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

// Argument INPUT z funkcji "checkForm" przechowuje tablicę z naszymi inputami;
//  Argument EL odnosi się do każdej zmiennej, którą umieściliśmy w tablicy;

sendBtn.addEventListener('click', e => {
	e.preventDefault();

	checkForm((username, pass, pass2, email));
});

clearBtn.addEventListener('click', e => {
	e.preventDefault()[(username, pass, pass2, email)].forEach(element => {
		element.value = '';
	});
});
