export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('login'));

    if (user != null && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}