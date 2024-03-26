//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Tactical
router.use('/registration/current', require('./views/registration/current/routes/routes'))
router.use('/registration/v2', require('./views/registration/v2/routes/routes'))

// Strategic
router.use('/registration/strategic', require('./views/registration/strategic/routes/routes'))



module.exports = router
