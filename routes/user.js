const router = require ('express').Router();
const passport = require ('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
    const authenticated = req.isAuthenticated();
    if(authenticated){
        res.send({
            name: req.user.name,
            email: req.user.email,
        }) 
    }
});
router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
})
module.exports = router;