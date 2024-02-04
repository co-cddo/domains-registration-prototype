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
        response.redirect("registrant-type-fail")
    } else {
        response.redirect("registrant")
    }
})

// Q: Registrant
router.post('/registrant-answer', function(request, response) {

    var registrantType = request.session.data['registrant-type']
    if (registrantType == "central"){
        response.redirect("exemption")
    } else {
        response.redirect("written-permission")
    }
})

// Q: Exemption
router.post('/exemption-answer', function(request, response) {

    var exemptionRt = request.session.data['exemption']
    if (exemptionRt == "no"){
        response.redirect("exemption-fail")
    } else {
        response.redirect("exemption-upload")
    }
})

// Q: Written permission
router.post('/written-permission-answer', function(request, response) {

    var writtenPermission = request.session.data['written-permission']
    if (writtenPermission == "yes"){
        response.redirect("written-permission-upload")
    } else {
        response.redirect("written-permission-fail")
    }
})



module.exports = router
   