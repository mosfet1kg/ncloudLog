const axios = require('axios');

const { ['X-NCP-auth-key']: ncpAuthKey, ['X-NCP-service-secret']: sensServiceSecret, serviceId } = process.env;

module.exports = (function() {
  return {
    sendSms: ({ from, to, content }, callback) => {
      const message = {
        type: "sms",
        from,
        to, // array
        content
      };

      axios({
        method: 'POST',
        url: `https://api-sens.ncloud.com/v1/sms/services/${ encodeURI( serviceId ) }/messages`,
        headers: {
          'X-NCP-auth-key': ncpAuthKey,
          'X-NCP-service-secret': sensServiceSecret
        },
        data: message
      })
        .then( res => {
          callback( null, res.data );
        })
        .catch( err => {
          callback( err );
        }) // end axios Promise
    }
  }
})();
