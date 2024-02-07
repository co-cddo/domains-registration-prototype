//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

  
// Add your routes here
// Q: Registrant type
router.post('/registrant-type-answer', function(request, response) {
    var completedUrl = 'answers'

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
    if (registrantType == "Central government department or agency"){
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
    if (writtenPermission == "Yes, evidence provided"){
        response.redirect("written-permission-upload")
    } else {
        response.redirect("written-permission-fail")
    }
})

// Q: Domain
router.post('/domain-answer', function(request, response) {

    var registrantType2 = request.session.data['registrant-type']
    if (registrantType2 == "Central government department or agency"){
        response.redirect("minister")
    } else {
        response.redirect("answers")
    }
})

// Q: Minister support
router.post('/minister-answer', function(request, response) {

    var minister = request.session.data['minister']
    if (minister == "Yes, evidence provided."){
        response.redirect("minister-upload")
    } else {
        response.redirect("answers")
    }
})

// Answers
router.get('/answers', function (req, res) {
    req.session.data.COMPLETED = true
    res.render('./' + req.originalUrl, {
    })
  })

module.exports = router

