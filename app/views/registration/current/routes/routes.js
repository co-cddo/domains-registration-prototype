//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Q: Registrant type


  router.post('/registrant-type-answer', function(request, response) {

    var registrantType = request.session.data['registrant-type']
    if (registrantType == "none"){
        response.redirect("/registrant-type-fail")
    } else {
        response.redirect("/registrant-type")
    }
})
module.exports = router
   