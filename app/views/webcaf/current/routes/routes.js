//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

    
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
  
// Q: Webcaf3 to Webcaf3b - routing
router.post('/webcaf3-answer', function(request, response) {

    var igpachieved = request.session.data['statement-achieved']
    var igpnotachieved = request.session.data['statement-not-achieved']
    
    
    
    if (igpnotachieved == "objective1" || igpnotachieved == "objective2" || igpnotachieved == "objective3" ) {
        response.redirect("outcome-not-achieved2")
    } else {
        response.redirect("outcome-achieved2")
    }
})

module.exports = router

