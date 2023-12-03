
import Cookies from 'js-cookie'

export const setTokenInCookie = (token, user) => {
    const userString = JSON.stringify(user);
    Cookies.set('token', token, { path: '/'});
    Cookies.set('user', userString, {path: '/'});
}

export const getTokenFromCookie = () => {
    const token = Cookies.get('token');
    const userString = Cookies.get('user');
    const user = userString ? JSON.parse(userString) : null;
    return { token, user };
};