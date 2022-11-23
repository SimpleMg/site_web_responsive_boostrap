const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	validateInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();
	let x = true;
	if (usernameValue === '') {
		setError(username, 'Un nom est recquis.');
		x = false;
	} else {
		setSuccess(username);
	}

	if (emailValue === '') {
		setError(email, 'Un mail est requis.');
		x = false;
	} else if (!isValidEmail(emailValue)) {
		setError(email, 'Entrez un mail correct.');
		x = false;
	} else {
		setSuccess(email);
	}

	if (messageValue === '') {
		setError(message, 'Un message est requis.');
		x = false;
	} else if (messageValue.length < 4) {
		setError(message, 'Le message est trop court.');
		x = false;
	} else {
		setSuccess(message);
	}

	if (x) {
		alert('Votre message a bien été envoyé.');
	}
};

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#click');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
	modal.style.display = 'block';
}

// Close
function closeModal() {
	modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

function easter_egg() {
	document.location.href = 'easter_egg.html';
}
