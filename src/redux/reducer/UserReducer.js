const userInit = {}

const UserReducer = (state = userInit, action) => {
    switch(action.type) {
        case "USER_LOGIN": 
            const { userid, username, email, password } = action.payload;
            return {
                userid: userid,
                username: username,
                email: email,
                password: password
            }
        case "USER_SIGNUP": 
            const { usersignupid, signupusername, signupemail, signuppassword} = action.payload;
            return {
                userid: usersignupid,
                username: signupusername,
                email: signupemail,
                password: signuppassword
            }
        case "EDIT_USER": 
            const { newUsername, newUserid, newEmail, newPassword } = action.payload;
            return {
                userid: newUserid,
                username: newUsername,
                email: newEmail,
                password: newPassword
            }
        case "USER_LOGOUT": 
            return {
                userid: "",
                username: "",
                email: "",
                password: ""
            }
        default:
            return state
    }
}

export default UserReducer