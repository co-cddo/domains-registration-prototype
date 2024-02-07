//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

  
// Add your routes here




// Answers
router.get('/answers', function (req, res) {
    req.session.data.COMPLETED = true
    res.render('./' + req.originalUrl, {
    })
  })

module.exports = router

