const logout = async () => {
  const response = await fetch('/api/users/logout');

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out.');
  }
};

//addeventlistener if the queryselector exists
document.querySelector('#logout')?.addEventListener('click', logout);