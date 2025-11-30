import { logout } from "./auth.js";

import { monitorAuthState } from "./auth.js";


const logoutBTN = document.getElementById('logout');
logoutBTN.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        await logout();
        window.location.href = 'index.html';
    }
    catch (error) {
        console.error('Error logging out: ' + error.message);
    }
}
);

monitorAuthState((user) => {
    if (!user) {
        window.location.href = 'index.html';
    }
}
);
