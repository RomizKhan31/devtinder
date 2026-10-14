const adminAuth = (req, res, next) => {
    const token = "xydfz";
    const isAdminAuthorized = token === "xyz";
    console.log("traversed it when i call 'admin/getAlldata'");
    if (!isAdminAuthorized) {
        res.status(404).send("Unauthorized Admin request");
    }
    else {
        next();
    }
};

const userAuth = (req, res, next) => {
    const token = "xydsfz";
    const isAdminAuthorized = token === "xyz";
    console.log("traversed it when i call 'user/data'");
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized user request");
    }
    else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth
}