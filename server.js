document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userData = {
      name: document.getElementById('name').value,
      username: document.getElementById('username').value,
      age: parseInt(document.getElementById('age').value),
      email: document.getElementById('email').value,
      gender: document.getElementById('gender').value.toUpperCase(),
      password: document.getElementById('password').value,
      knowledgeLevel: document.getElementById('knowledgeLevel').value.toUpperCase(),
      reasonsWhy: document.getElementById('reasonsWhy').value.toUpperCase(),
    };

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      document.getElementById('output') + JSON.stringify(data, null, 2);

        
        setTimeout(() => {
          window.scrollTo(0, 0)
          location.reload();
        }, 1000);

    } catch (error) {
      console.error(error);
    }
  });
});
