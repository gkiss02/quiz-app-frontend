import { redirect } from 'react-router-dom';

export function getTokenDuration() {
    const storedExpirationDate = sessionStorage.getItem('expirationDate');
    if (!storedExpirationDate) {
        return redirect('/errorPage');
    }

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const accessToken = sessionStorage.getItem('accessToken');

    const tokenDuration = getTokenDuration();

    if (typeof tokenDuration === 'number' && tokenDuration < 0) {
        return 'EXPIRED';
    }

    return accessToken;
}

export function tokenLoader() {
    const accessToken = getAuthToken();
    return accessToken;
}

export function checkAuthLoader() {
    const accessToken = getAuthToken();

    if (!accessToken) {
        return redirect('/login');
    }

    return null;
}

setInterval( async() => {
    sessionStorage.getItem('refreshToken');
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refreshToken: sessionStorage.getItem('refreshToken'),
        }),
    });

    const data = await response.json();
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('expirationDate', data.expirationDate);
} , 30 * 60 * 1000);