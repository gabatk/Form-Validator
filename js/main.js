const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const popup = document.querySelector('.popup');
const eyeIcons = document.querySelectorAll('.fa-eye');

const showError = (input, msg) => {
	// argument input przechowuje nasze pojedyncze INPUTy;
	// argument MSG przechowuje placeholder;

	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
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

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`Your ${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} is to short, min. ${min} characters`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, "Passwords don't match");
	}
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'Email is incorrect');
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box');
	let errorCount = 0;

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('show-popup');
	}
};

const showPassword = e => {
	let clickedElement = e.target;
	clickedElement.classList.toggle('fa-eye-slash');
	clickedElement.classList.toggle('fa-eye');

	if (clickedElement.classList.contains('fa-eye-slash')) {
		clickedElement.previousElementSibling.setAttribute('type', 'text');
	} else {
		clickedElement.previousElementSibling.setAttribute('type', 'password');
	}
};

sendBtn.addEventListener('click', e => {
	e.preventDefault();

	checkForm([username, pass, pass2, email]);
	checkLength(username, 3);
	checkLength(pass, 8);
	checkPassword(pass, pass2);
	checkMail(email);
	checkErrors();
});

clearBtn.addEventListener('click', e => {
	e.preventDefault();
	[username, pass, pass2, email].forEach(element => {
		element.value = '';
		clearError(el);
	});
});

eyeIcons.forEach(eyeIcon => {
	eyeIcon.addEventListener('click', showPassword);
});
