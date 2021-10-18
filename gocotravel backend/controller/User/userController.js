const {registerUser} = require("./helpers/registerUser");
const {loginUser} = require("./helpers/loginUser");
const {authenticateUser} = require("./helpers/authenticateUser");
const {editUser} = require("./helpers/editUser");
const {gettingUser} = require("./helpers/gettingUser");
const {getUserById} = require("./helpers/getUserById");
const {getRequestedUser} = require("./helpers/getRequestedUser");
const {forgetPassword} = require ("./helpers/forgetPassword")
const {changePassword} = require ("./helpers/changePassword");
const {protectedRoute} = require("./helpers/protectedRoute");
const {mailAbtReportToAdmin} = require("./helpers/mailAboutReportToAdmin");
const {reverseCounter} = require("./helpers/reverseCounter");
const {getAllUsers} = require("./helpers/getAllUsers");
const {getAllBlockUsers} = require("./helpers/getAllBlockUsers");
const {blockUser} = require("./helpers/blockingUser");
const {unblockUser} = require("./helpers/unblockingUser");
const {getUserOfReportById} = require("./helpers/getUserOfReportById");
const {contactAdminApi} = require("./helpers/contactAdminApi");
const {getFineRecipt} = require("./helpers/getFineRecipt");
const {deleteRecipt} = require("./helpers/deleteRecipt");
module.exports ={
    registerUser:registerUser,
    loginUser:loginUser,
    authenticateUser:authenticateUser,
    editUser:editUser,
    gettingUser:gettingUser,
    getUserById:getUserById,
    getRequestedUser:getRequestedUser,
    forgetPassword:forgetPassword,
    changePassword:changePassword,
    protectedRoute:protectedRoute,
    mailAbtReportToAdmin:mailAbtReportToAdmin,
    reverseCounter:reverseCounter,
    getAllUsers:getAllUsers,
    getAllBlockUsers:getAllBlockUsers,
    blockUser:blockUser,
    unblockUser:unblockUser,
    getUserOfReportById:getUserOfReportById,
    contactAdminApi:contactAdminApi,
    getFineRecipt:getFineRecipt,
    deleteRecipt:deleteRecipt,
} ;