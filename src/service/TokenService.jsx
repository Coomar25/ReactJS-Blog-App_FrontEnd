
import Cookies from 'js-cookie'

export const setTokenInCookie = (token, user) => {
    const userString = JSON.stringify(user);

    // cookie lai 4 din samma store garam hai tw
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1 );
    Cookies.set('token', token, { expires: expirationDate, path: '/'});
    Cookies.set('user', userString, { expires:expirationDate, path: '/'});
}

export const getTokenFromCookie = () => {
    const token = Cookies.get('token');
    const userString = Cookies.get('user');
    const user = userString ? JSON.parse(userString) : null;
    return { token, user };
};

