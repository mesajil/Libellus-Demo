const { Router } = require("express");
const router = Router();

router.get("/activity/", require("../controllers/getActivity"));
router.post("/activity/", require("../controllers/createActivity"));
router.delete("/activity/:id", require("../controllers/deleteActivity"));
router.put("/activity/:id", require("../controllers/updateActivity"));

module.exports = router;
