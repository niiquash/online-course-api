const appConfig = require('../config/app')

const loadUser = async (req, res, next) => {
    // const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);

    console.log(req.headers);
    next();
}

const fetchAuthZeroUser = async (authorizationValue) => {
    const response = await fetch(`${appConfig.authorizationHost}/userinfo`, {
        headers: { 'Authorization': authorizationValue },
    });

    return response.json();
};

module.exports = loadUser;