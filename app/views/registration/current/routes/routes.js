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
    else if (domainConf == "Yes"){
            response.redirect("registrant-details")}
       else {response.redirect("domain")
    }
})


// Q: Minister support
router.post('/minister-answer', function(request, response) {

    var minister = request.session.data['minister']
    if (minister == "Yes, evidence provided:"){
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
router.post('/registry-details-answers', function (req, res) {

    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      'd749d1a5-366c-4c0b-8e96-488150a62205',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      //Registry email set now
      req.body.regpubEmail
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('/answers');
  
  });

module.exports = router

