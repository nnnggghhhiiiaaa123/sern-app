import userService from "../services/userService";


let handleLogin = async (req, res) => {
    let email= req.body.email;
    let password = req.body.password;
    // let email = req.query.email;
    // let password = req.query.password;
    // console.log(req.params.x1);
    // console.log(req.params.x2);

    console.log("vao login", email)
    console.log("vao login", password)
    try {

        if (!email || !password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!'
            })
        }

        let userData = await userService.handleUserLogin(email, password);
        console.log(userData)
        //check email exist 
        //compare password
        // return userInfor
        //access_token: JWT json web token
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {}
        })
    } catch (error) {
        console.log("bi loi roi", error)
    }
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //ALL, id
    if(!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }

    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    return res.json(200).json(message);
}

let handleDeleteUser = async (req, res) => {
    console.log("id",req.body.id)
    if(!req.body.id){
        return res.status(200).json({
            errCode: 2,
            errMessage: "Missing required parameters! "
        })
    }
   let message = await userService.deleteUser(req.body.id);
   return res.json(200).json(message);

}
  
let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)
}

let getAllCode = async (req,res) => {
    try {
        let data = await userService.getAllCodeService(req.query.type);
    } catch (e) {
        console.log('Get all code error: ',e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    handleLogin: handleLogin,
    handleCreateNewUser:handleCreateNewUser,
    handleGetAllUsers :handleGetAllUsers,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode: getAllCode
}