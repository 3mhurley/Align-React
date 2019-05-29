const router = require("express").Router();
const calendar = require("../../controllers/calendar");
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');

// // Below info will be between get endpoints and post endpoint
// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true, 
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://dev-lifter1500.auth0.com/.well-known/jwks.json`
//     }),
    
//     // Validate the audience and the issuer
//     audience: 'xe0N7xfT2EcWvwO0AHe2DN0zMJ6sNulW',
//     issuer: 'https://dev-lifter1500.auth0.com/',
//     algorithms: ['RS256']
// });

// matches with "/api/newcal"
router.route("/calendar")
    // .get(calendar.findAll)
    .post(calendar.create);

// matches with "/api/newcal:id"
router.route('/calendar/:id')
    .get(calendar.findById)
    .put(calendar.update)
    .delete(calendar.remove);

module.exports = router;