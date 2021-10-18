var express = require("express");
var router = express.Router();
const authin = require("../middleware/AuthController");
const upload = require("../middleware/multer-config");
const userController = require("../controller/User/userController");
const ridesController = require("../controller/rides/ridesController");
const reviewController = require("../controller/review/reviewController");
const reportController = require("../controller/report/reportController");
const searchController = require("../controller/search/searchController");
//USER API'S_____________________________________________________________________

//POST USERS API/sign up
router.post("/register",upload.single("file"), userController.registerUser);
//login User Api
router.post("/login", userController.loginUser);
//GET home page API
router.get("/emails", authin, userController.authenticateUser);
//put api for editing User
router.put("/userEditing",upload.single("file"),authin,userController.editUser);
//get api for getting User
router.post("/getSingleUser", authin, userController.gettingUser);
router.post("/forgetPassword",userController.forgetPassword);
router.post("/changePassword",userController.changePassword);

//Admin api's
router.get("/getUserById/:rider_id",userController.getUserById);
router.get("/getRequestedUser/:reqUser_id/:post_id",userController.getRequestedUser);
router.post("/mailAbtReportToAdmin",authin,userController.mailAbtReportToAdmin);
router.post("/contactAdminApi",authin,upload.single("file"),userController.contactAdminApi);
router.put("/reverseCounter/:userId", authin, userController.reverseCounter);
router.get("/getAllUsers",authin,userController.getAllUsers);
router.get("/getAllBlockUsers",authin,userController.getAllBlockUsers);
router.get("/getAllReports",authin,reportController.getAllReports);
router.put("/blockUser/:user_id",authin,userController.blockUser);
router.put("/unblockUser/:user_id",authin,userController.unblockUser);
router.get("/getUserOfReportById/:id",userController.getUserOfReportById);
router.get("/fineRecipt/:id",userController.getFineRecipt);
router.delete("/deleteRecipt/:recipt_id",userController.deleteRecipt);

//POST/RIDE API'S_____________________________________________________________________

//post vehical Api
router.post("/vehical",upload.single("file"), authin, ridesController.registerVehical);
// upload.single("car_image")
//post ride Api
router.post("/postride", authin, ridesController.postRide);
//put api for updating requestedUser array
router.put("/requestedUser/:id", authin, ridesController.requestedUser);
//put api for updating customer  array
router.put("/confirmUser", authin, ridesController.confirmUser);
//delete api for deleting user from ride 
router.delete( "/deleteUserFromRide",authin,ridesController.deleteUserFromRide);
//put api for completing  ride 
router.put("/rideComplete/:post_id", authin, ridesController.rideComplete);
//put api for when rider cancel ride 
router.put("/rideCancel/:post_id", authin, ridesController.rideCancel);
//put api for when rider start ride
router.put("/rideStart/:post_id", authin, ridesController.rideStart);
//put api for when rider edit ride 
router.put("/rideEdit", authin, ridesController.editPost);
//put api for when rider edit ride 
router.put("/vehicalEdit", authin, upload.single("file"), ridesController.editVehical);
//get api for getting vehical 
router.get("/gettingVehical", authin, ridesController.gettingVehical);
//get Api for getting post
router.get("/getAllPosts", authin, ridesController.gettingPost);
//get Api for getting single post
router.get("/getSinglePost", authin, ridesController.gettingSinglePost);
router.get("/getPostVehical/:car_id",authin, ridesController.getPostVehical);
router.get("/getAllPostsOfRider", authin, ridesController.AllPostsOfRider);

//REVIEW API'S_________________________________________________________________________
//post review Api
router.post("/postReview", authin, reviewController.postReview);
//post RIDER review Api
router.post("/riderReview", authin, reviewController.riderReview);
router.get("/checkReview/:post_id", authin, reviewController.checkReview);
//REPORT API'S_________________________________________________________________________
//post REPORT Api
router.post("/postReport", authin, reportController.postReport);
router.get("/checkReport/:post_id", authin, reportController.checkReport);
router.post("/reportUser", authin, reportController.reportOnUser);
router.get("/checkReportOnUser/:post_id/:user_id", authin, reportController.checkReportOnUser);
router.get("/singleUserReports", authin, reportController.getSingleUserReports);
router.get("/getSingleReportById/:reportId", authin, reportController.getSingleReportById);

//Search API'S_________________________________________________________________________
router.get("/searchingPost/:pick_up_city/:drop_off_city/:pickUpDate/:pickUpTime", authin, searchController.searchPosts );
router.get("/rideHistory",authin, searchController.rideHistory );

router.get("/protectedRoute",authin,userController.protectedRoute);

module.exports = router;
