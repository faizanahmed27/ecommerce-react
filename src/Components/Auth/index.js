// Login Details in Local Storage
export const storeLocalStorage = (data, next) => {

    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("token", JSON.stringify(data.token));

    next();
}

// Clear Local Storage Data
export const clearLocalStorage = (data) => {
    localStorage.removeItem("data");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
}

// check Login Detail, which User is LoggedIn
export const checkLogin = () => {
    const data = localStorage.getItem("data");
    if (data) {
        const obj = JSON.parse(data);
        if (obj.token && obj.email) {
            return true;
        }
    }

    return false;
}

// get User Token
export const getToken = () => {
    if (checkLogin()) {

        const token = JSON.parse(localStorage.getItem("data")).token;
        return token;
    } else {
        return null;
    }
}

// get Currect User
export const getCurrentUser = () => {
    if (checkLogin()) {
        const user = JSON.parse(localStorage.getItem("data"));
        return user;
    } else {
        return null;
    }
}