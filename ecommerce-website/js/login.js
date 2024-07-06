
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const storedUser = localStorage.getItem(username);
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.password === password) {
                alert('Login successful!');
                window.location.href = 'home.html';
            } else {
                alert('Incorrect password.');
            }
        } else {
            alert('User not found.');
        }
    } else {
        alert('Please fill in both fields.');
    }
}