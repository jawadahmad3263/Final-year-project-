const {registerVehical} = require("./helpers/registerVehical");
const {postRide} = require("./helpers/postRide");
const {requestedUser} = require("./helpers/requestedUser");
const {confirmUser} = require("./helpers/confirmUser");
const {deleteUserFromRide} = require("./helpers/deleteUserFromRide");
const {rideComplete} = require("./helpers/rideComplete");
const {rideCancel}  =  require("./helpers/rideCancel");
const {editPost}  =  require("./helpers/editPost");
const {editVehical} = require("./helpers/editVehical");
const {gettingPost} = require("./helpers/gettingPost");
const {gettingVehical} = require("./helpers/gettingVehical");
const {gettingSinglePost} = require("./helpers/gettingSinglePost")
const {getPostVehical} = require("./helpers/getPostVehical");
const { rideStart } = require("./helpers/rideStart");
const {AllPostsOfRider}=require("./helpers/allPostsOfRider")
module.exports ={
    registerVehical:registerVehical,
    postRide:postRide,
    requestedUser:requestedUser,
    confirmUser:confirmUser,
    deleteUserFromRide:deleteUserFromRide,
    rideComplete:rideComplete,
    rideCancel:rideCancel,
    editPost:editPost,
    editVehical:editVehical,
    gettingPost:gettingPost,
    gettingVehical:gettingVehical,
    gettingSinglePost:gettingSinglePost,
    getPostVehical:getPostVehical,
    rideStart:rideStart,
    AllPostsOfRider:AllPostsOfRider
  
    
} ;