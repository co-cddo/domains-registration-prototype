//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

    
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
        else if (registrantType == "Parish or community council" ){
            response.redirect("domain")}
    // Q: Route 2
    else if (registrantType == "Central government department or agency" || registrantType == "Non-departmental body - also known as an arm's length body" ){
                response.redirect("domain-purpose")}
    // Q: Route 3
    else if (registrantType == "County, borough, metropolitan or district council" || registrantType == "Fire service" || registrantType == "Combined or unitary authority" || registrantType == "Police and crime commissioner" || registrantType == "Joint authority" || registrantType == "Joint committee" || registrantType == "Organisation representing a group of public sector bodies" || registrantType == "Organisation representing a profession across public sector bodies"){
        response.redirect("written-permission")}
    })


// Q: Domain purpose
router.post('/domain-purpose-answer', function(request, response) {

    var dPurpose = request.session.data['purpose']

    if (dPurpose == "Website (may include email)"){
        response.redirect("exemption")}

    else if (dPurpose == "Email only domain"){
        response.redirect("written-permission")}
    else {response.redirect("domain-purpose-fail") 
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
    if (writtenPermission == "Yes, evidence provided:"){
        response.redirect("written-permission-upload")
    } else {
        response.redirect("written-permission-fail")
    }
})


// Q: Domain confirmation
router.post('/domain-confirm-answer', function(request, response) {

    var domainConf = request.session.data['domainconfirm']
    var regType = request.session.data['registrant-type']
  
    if (domainConf == "Yes" && regType == "Central government department or agency"){
        response.redirect("minister")}
    else if (domainConf == "Yes" && regType == "Non-departmental body - also known as an arm's length body"){
            response.redirect("minister")}
    else if (domainConf == "Yes" || domainConf == "Parish or community council" || domainConf == "Town"){
            response.redirect("registrant-details")}
       else {response.redirect("domain")
    }
})

// Q: Registrant answer 
router.post('/registrant-answer', function(request, response) {
    var registrantAnswerType = request.session.data['registrant-type']
    
    if (registrantAnswerType == "Parish or community council" || registrantAnswerType == "Town"){
        response.redirect("registrant-evidence")
    } else {
        response.redirect("registry-details")
    }
})

// Q: Registrant evidence details (Parish and Town only)
router.post('/registrant-evidence-answer', function(request, response) {

    var registrantEvidence = request.session.data['registrantevidence']
    if (registrantEvidence == "Yes, evidence provided:"){
        response.redirect("registrant-evidence-upload")
    } else {
        response.redirect("registry-details")
    }
})


// Q: Minister support
router.post('/minister-answer', function(request, response) {

    var minister = request.session.data['minister']
    if (minister == "Yes"){
        response.redirect("minister-upload")
    } else {
        response.redirect("registrant-details")
    }
})


// Answers
router.get('/answers', function (req, res) {
    req.session.data.COMPLETED = true
    res.render('./' + req.originalUrl, {
    })
  })



// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address-page', function (req, res) {

    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      '01992f67-0e0b-41b9-9191-ea1e878d018a',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.body.emailAddress
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('confirmation');
  
  });

  // Q: Webcaf3 to Webcaf3b - routing
router.post('/webcaf3-answer', function(request, response) {

    var webcaf3na = request.session.data['webcaf3-na']
    var webcaf3na1 = request.session.data['webcaf3-na1']
    var webcaf3na2 = request.session.data['webcaf3-na2']
    if (webcaf3na == "yes" || webcaf3na1 == "yes" || webcaf3na1 == "yes") {
        response.redirect("review-not-achieved")
    } else {
        response.redirect("webcaf3b")
    }
})



module.exports = router

