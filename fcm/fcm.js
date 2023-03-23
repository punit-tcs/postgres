var FCM = require('fcm-node');
    var serverKey = 'AAAAtbCIC3w:APA91bFHVHDcTeJTjmiLJ7gWzVF9aA0P8_gwB8XAvUvdVgOFRuQSrICZApzIDVyB4BeUe9PgmS8LpMOKiJsxQ35n4a-DL09_rRaHG7uULx4vApeT_JAM1fCA_11lNEjWQ5zMabr4M7Pc'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'eFQjWrNEQk-vHG9Tdadzwr:APA91bErXHHCUWTxQ3sHZljgrOUqno4agywnlM4WAxWQpQnIK7QaKTLpFIOg6fiLrRxno62CW-f6A5-Xx6WIPphiaHSfqX9fxImEOaABauMbrompypxojRYOKG9nSc9HhVzxkVMM_auO', 

        notification: {
            title: 'Title of your push notification', 
            body: 'notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });