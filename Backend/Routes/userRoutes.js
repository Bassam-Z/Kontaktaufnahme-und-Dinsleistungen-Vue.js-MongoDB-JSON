const express = require("express");
const autherController = require("../Controller/userRegisterController");
const requireAuth = require("../middleware/authMideleware")
const router = express.Router();
// const {requireAuth} = require("../middleware/authMideleware")

// router.get("/userRegister", autherController.userRegister_get);
router.post("/userRegister", autherController.userRegister);
// router.get("/userLogin", autherController.userLogin_get);
router.post("/userLogin", autherController.userLogin);

router.get("/userLogout", autherController.userLogout);

router.get("/getUser",requireAuth.requireAuth, autherController.userLogin);

// router.get('/', (req,res) => res.render('HomeSeite'));
// router.get('/denstleisungen-Werkzeuge-Kontakt',requireAuth,(req,res) => res.render('Denst-Werk-Kontakt'));



// router.post("/werkzeug", autherController.werkzeugCreate);

module.exports = router;