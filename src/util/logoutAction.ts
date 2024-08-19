import { redirect } from 'react-router-dom';

export function logoutAction() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expirationDate');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('expirationDate');
    return redirect('/');
}