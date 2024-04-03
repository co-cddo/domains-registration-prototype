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
    // Q: Route 4
    if (registrantType == "none"){
        response.redirect("registrant-type-fail")}
    // Q: Route 1
        else if (registrantType == "Parish or community council" || registrantType == "Neighbourhood or village council" ){
            response.redirect("domain")}
    // Q: Route 2
    else if (registrantType == "Central government department or agency" || registrantType == "Non-departmental body - also known as an arm's length body" ){
                response.redirect("domain-purpose")}
    // Q: Route 3
    else if (registrantType == "Town, county, borough, metropolitan or district council" || registrantType == "Fire service" || registrantType == "Combined or unitary authority" || registrantType == "Police and crime commissioner" || registrantType == "Joint authority" || registrantType == "Joint committee" || registrantType == "Organisation representing a group of public sector bodies" || registrantType == "Organisation representing a profession across public sector bodies"){
        response.redirect("written-permission")}
    })


// Q: Domain purpose
router.post('/domain-purpose-answer', function(request, response) {

    var dPurpose = request.session.data['purpose']

    if (dPurpose == "Website (may include email)"){
        response.redirect("exemption")}

    else if (dPurpose == "Email only domain"){
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

// Q: Domain confirm
router.post('/domain-confirm-answer', function(request, response) {

    var domainConfirm = request.session.data['domainconfirm']
    var registrantType2 = request.session.data['registrant-type']
    if (domainConfirm == "Yes"){
        response.redirect("registrant-details")
    else if (domainConfirm == "No"){
        response.redirect("domaim")}
    else if (domainConfirm == "Yes" &&	registrantType2 == "Central government department or agency"){
            response.redirect("minister") }
    else if (domainConfirm == "Yes" || registrantType2 == "Non-departmental body - also known as an arm's length body")
    response.redirect("minister") }
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

