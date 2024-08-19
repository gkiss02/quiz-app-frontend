import { redirect } from 'react-router-dom';

export function getTokenDuration() {
    const storedExpirationDate = sessionStorage.getItem('expirationDate') ? sessionStorage.getItem('expirationDate') : localStorage.getItem('expirationDate');

    if (!storedExpirationDate) {
        return redirect('/error-page');
    }

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const accessToken = sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : localStorage.getItem('accessToken');

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

setInterval(async() => {
    await refreshToken();
} , 60 * 45 * 1000);

export const refreshToken = async () => {
    const refreshToken = sessionStorage.getItem('refreshToken') ? sessionStorage.getItem('refreshToken') : localStorage.getItem('refreshToken');

    const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refreshToken
        }),
    });

    const data = await response.json();
    sessionStorage.getItem('refreshToken') ? sessionStorage.setItem('refreshToken', data.accessToken) : sessionStorage.setItem('refreshToken', data.accessToken) ;
    sessionStorage.getItem('expirationDate') ? sessionStorage.setItem('expirationDate', data.expirationDate) : sessionStorage.setItem('expirationDate', data.expirationDate);
}