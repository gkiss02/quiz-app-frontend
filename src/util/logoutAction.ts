import { redirect } from 'react-router-dom';

export function logoutAction() {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('expirationDate');
    return redirect('/');
}