require('dotenv').config();
const path = require('path');
const tracker = require('./helpers/tracker');
const sensApi = require('./helpers/ncloudSens');

const filePath = path.join( __dirname, 'log.txt' );

const tail = tracker.createTracker( filePath );

tail.on("line", function(data) {
  if ( data.includes("hello world") ) {
    sensApi.sendSms({
      from: "01028640911",
      to: ["01028640911"],
      content: "An Event Occurred"
    }, (error, result) => {
      if ( error ) {
        return console.log( error.message );
      }
      console.log( result );
    })
  }
});

tail.on("error", function(error) {
  console.log('ERROR: ', error);
});
