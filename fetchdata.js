document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = parseInt(document.getElementById('age').value, 10); // Converte para número
    const gender = document.getElementById('gender').value;
    const knowledgeLevel = document.getElementById('knowledgeLevel').value;
    const reasonsWhy = document.getElementById('reasonsWhy').value;

    const userData = {
        name,
        username,
        age,
        email,
        password,
        gender,
        knowledgeLevel,
        reasonsWhy
    };

    console.log('Dados do formulário:', userData);

    try {
        const response = await fetch('https://api-trilhas-api.onrender.com/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            const errorResult = await response.json();
            alert('Erro ao enviar os dados: ' + errorResult.error);
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados. Verifique o console para mais detalhes.');
    }
});


