import { signup,login,monitorAuthState } from "./auth.js";

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBTN = document.getElementById('signup');
const loginBTN = document.getElementById('login');
const messageDiv = document.getElementById('message');


const showMessage = (msg, isError = false) => {
    messageDiv.textContent = msg;
    messageDiv.style.color = isError ? 'red' : 'green';
}

signupBTN.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    
    try {
        const user = await signup(email, password);
        showMessage('User signed up successfully',user.email);
        setTimeout(() => {
            window.location.href = 'app.html';
        }, 1000);
    }
    catch (error) {
        showMessage('Error signing up: ' + error.message, true);
    }
    
});

loginBTN.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const user = await login(email, password);
        showMessage('User logged in successfully',user.email);
        setTimeout(() => {
            window.location.href = 'app.html';
        }, 1000);
    }
    catch (error) {
        showMessage('Error logging in: ' + error.message, true);
    }

});

monitorAuthState((user) => {
    if (user) {
        window.location.href = 'app.html';
    }
}
);


