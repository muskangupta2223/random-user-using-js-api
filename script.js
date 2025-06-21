const card = document.getElementById('user-card');
const button = document.getElementById('new-user-btn');

function getUser() {
  card.textContent = 'Loading...';

  fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      card.innerHTML = `
        <img src="${user.picture.large}" width="100">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Country:</strong> ${user.location.country}</p>
      `;
    })
    .catch(() => {
      card.textContent = 'Failed to load user 😢';
    });
}

// Load a user when page first loads
getUser();

// Load a new user on button click
button.addEventListener("click", getUser);
