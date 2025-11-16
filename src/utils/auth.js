
export const getCurrentUser = () => {
    try {
        const user = JSON.parse(localStorage.getItem('data'));
        const token = localStorage.getItem('token');

        if (!user || !token) return null;

        // Optional: check token expiry (assuming JWT)
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("TOKEN PAYLOAD: ", payload);
        const isExpired = payload.exp * 1000 < Date.now();

        if (isExpired) {
            clearSession();
            return null;
        }

        return user;
    } catch (err) {
        return null;
    }
};

export const setSession = (data, token) => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('token', token);
};

export const clearSession = () => {
    localStorage.removeItem('data');
    localStorage.removeItem('token');
};