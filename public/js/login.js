// login form handler

const loginFormHandler = async (event) => {
    event.preventDefault();
    const emailLogin = document.querySelector("#email-login").value.trim();
    const passwordLogin = document.querySelector("#password-login").value.trim();

    if (emailLogin && passwordLogin) {
        const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ emailLogin, passwordLogin }),
        headers: { 'Content-Type': 'application/json' },
        }
        )};

    if (response.ok) {
        document.location.replace('/');
    }

    else {
        alert('Failed to login!')
    }

}

//sign up form handler
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to sign up.');
    }
  }
};

//login if user hits login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

//signup if user hits signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

