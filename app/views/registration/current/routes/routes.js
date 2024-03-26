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
        response.redirect("written-permission")
    }
})


// Q: Domain purpose
router.post('/domain-purpose-answer', function(request, response) {

    var dPurpose = request.session.data['purpose']

    if (dPurpose == "Website and email address"){
        response.redirect("exemption")}

    else if (dPurpose == "Email address only"){
        response.redirect("written-permission")}
    else if (dPurpose == "api" || dPurpose == "service" || dPurpose == "campaign" || dPurpose == "inquiry" || dPurpose == "blog" || dPurpose == "dataset"){
        response.redirect("domain-purpose-fail") }
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
        response.redirect("domain-confirm")
    }
})

// Q: Domain confirm
router.post('/domain-confirm-answer', function(request, response) {

    var domainConfirm = request.session.data['domainconfirm']
    if (domainConfirm == "Yes"){
        response.redirect("registrant-details")
    } else {
        response.redirect("domain")
    }
})

// Q: Minister support
router.post('/minister-answer', function(request, response) {

    var minister = request.session.data['minister']
    if (minister == "Yes, evidence provided."){
        response.redirect("minister-upload")
    } else {
        response.redirect("registry-details")
    }
})

// Answers
router.get('/answers', function (req, res) {
    req.session.data.COMPLETED = true
    res.render('./' + req.originalUrl, {
    })
  })


module.exports = router

