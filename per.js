// per.js
//middleware to check if the authenticated user has required permissions
function perm(permission) {
  return (req, res, next) => {
    const permissions = req.user.permissions;//get the permisson arr from the authenticated user object
    if (!permissions || !permissions.includes(permission)) {//if user has no permisison or 
      // dont have require permission send error msg
      return res.status(403).json({ msg: "Invalid permission" });
    }
    next();// else graunt access to the requested route
  };
}

module.exports = perm;
