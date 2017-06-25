var express = require('express');
var bodyParser = require('body-parser');
//var ngrok = require('ngrok');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// var report = require('./Report');
// app.get('/report', 
//   report
// );

// var sendback = require('./SendBack')
// app.get('/sendback',sendback)

app.get('/index',function(req,res){
  res.setHeader('content-type','text/html');
  res.send('<p>Add [URL]/file to your <a href="https://www.twilio.com/console/phone-numbers/incoming">twilio webhook.</a></p>')
  res.end();
});

app.post('/file',function(req,res){

  //var From = req.body.From;
  console.log(req.body);
  var fileNumber = req.body.Body;

  res.send(`
    <Response>
      <Message>
        Your complaint #${fileNumber} has been filed to the Human Resources Department for investigation. 
      </Message>
    </Response>
  `
  );
})

const PORT = 8081;

// ngrok.connect(PORT, function(err,url){
//   console.log("Go to "+url);
// });

app.listen(PORT, function(){
  console.log('Listening to '+PORT);
});



module.exports = app;
