var cors  = require('cors')
var express = require('express')
var request = require('request');

const port = 8745

var app = express()
app.unsubscribe(express.json())

app.patch('/v1/beneficiaires/{idBeneficiaire}/workflows',(req, res) => {
    res.status(200).send({
        test:"result"
    })
});

app.patch('/v1/beneficiaires/demande-masse-beneficiary/{idDemandeMasseBenef}/workflows',(req, res) => {
    res.status(200).send({
        test:"result"
    })
});


app.get('paypal/cib-callback',(req, res) => {
  console.log("open callback")

  res.status(200).send({
      state:req.query['state'],
      code:req.query['code']
  })
});


app.get('/paypal/cib-sync', (req, res) => {
  
  if(req.query['state']){
    console.log("state is ", req.query['state'])
  }
    
  var code = "5a6ebc1118adef71c08f3a6df149b4eb5f05ef75"

  console.log("redirect to ")
    
res.writeHead(301, {
      Location: `apps://https://portail-entreprise.attijariwafa.net:5443/paypal/cib-callback?code=${code}&state=${req.query['state']}`
      // Location: `http://www.example.com/gizmos`
      
    }).end();
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})