const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const popup = document.querySelector('#popup');

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	[(username, pass, pass2, email)].forEach(element => {
		element.value = '';
	});
});
