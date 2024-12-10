//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Tactical
router.use('/registration/current', require('./views/registration/current/routes/routes'))
router.use('/registration/v1', require('./views/registration/v1/routes/routes'))
router.use('/registration/v2-2', require('./views/registration/v2-2/routes/routes'))

// Strategic
router.use('/registration/ver1', require('./views/registration/ver1/routes/routes'))
router.use('/registration/strategic', require('./views/registration/strategic/routes/routes'))
router.use('/registration/strategic/g0-moving-pc', require('./views/registration/strategic/routes/routes'))



module.exports = router
