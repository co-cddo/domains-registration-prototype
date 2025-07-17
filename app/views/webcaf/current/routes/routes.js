//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
//var NotifyClient = require('notifications-node-client').NotifyClient,
//    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

    
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Q: Objective B routing
router.post('/objective-b-answer', function(request, response) {

    var objB = request.session.data['objective-b-completed']
    if (objB == "yes"){
        response.redirect("draft-assessment5")
    } else {
        response.redirect("draft-assessment3")
    }
})

// Q: Objective B status routing
router.post('/objective-b-status-answer', function(request, response) {

    var objBs = request.session.data['objective-b-status']
    if (objBs == "yes"){
        response.redirect("draft-assessment5")
    } else {
        response.redirect("draft-assessment3")
    }
})
// Q: Objective B status2 routing
router.post('/objective-b-status2-answer', function(request, response) {

    var objBs2 = request.session.data['objective-b-status2']
    if (objBs2 == "yes"){
        response.redirect("draft-assessment5")
    } else {
        response.redirect("draft-assessment3")
    }
})

  
// Q: b3a - routing
router.post('/b3a-answer', function(request, response) {

    var achieved1 = request.session.data['outcome1-achieved']
    var achieved2 = request.session.data['outcome2-achieved']
    var achieved3 = request.session.data['outcome3-achieved']
    var achieved4 = request.session.data['outcome4-achieved']
    var achieved5 = request.session.data['outcome5-achieved']
    var achieved6 = request.session.data['outcome6-achieved']
    var achieved7 = request.session.data['outcome7-achieved']
    var achieved8 = request.session.data['outcome8-achieved']
    var achieved9 = request.session.data['outcome9-achieved']
    var partiallyachieved1 = request.session.data['outcome1-partiallyachieved']
    var partiallyachieved2 = request.session.data['outcome2-partiallyachieved']
    var partiallyachieved3 = request.session.data['outcome3-partiallyachieved']
    var partiallyachieved4 = request.session.data['outcome4-partiallyachieved']
    var partiallyachieved5 = request.session.data['outcome5-partiallyachieved']
    var partiallyachieved6 = request.session.data['outcome6-partiallyachieved']
    var notachieved1 = request.session.data['outcome1-not-achieved']
    var notachieved2 = request.session.data['outcome2-not-achieved']
    var notachieved3 = request.session.data['outcome3-not-achieved']
    var notachieved4 = request.session.data['outcome4-not-achieved']
    
    
    
    if (achieved1 == "yes" &&  achieved2 == "yes" &&  achieved3 == "yes" &&  achieved4 == "yes" &&  achieved5 == "yes" &&  achieved6 == "yes" &&  achieved7 == "yes"&&  achieved8 == "yes" &&  achieved9 == "yes" &&  notachieved1 == "no" &&  notachieved2 == "no" &&  notachieved3 == "no" &&  notachieved4 == "no" ) {
        response.redirect("b3a-outcome-achieved")
    }
    else if (partiallyachieved1 == "yes" &&  partiallyachieved2 == "yes" &&  partiallyachieved3 == "yes" &&  partiallyachieved4 == "yes" &&  partiallyachieved5 == "yes" &&  partiallyachieved6 == "yes" &&  notachieved1 == "no" &&  notachieved2 == "no" &&  notachieved3 == "no" &&  notachieved4 == "no")
     {
        response.redirect("b3a-outcome-partially-achieved")
    }
    else 
     {
        response.redirect("b3a-outcome-not-achieved")
    }
})

module.exports = router

 