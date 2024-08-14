import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expirationDate');
    if (!storedExpirationDate) {
        return redirect('/errorPage');
    }

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    const tokenDuration = getTokenDuration();

    if (typeof tokenDuration === 'number' && tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/login');
    }

    return null;
}