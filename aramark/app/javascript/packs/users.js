function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

function deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

var PERMITTED_DOMAIN = 'http://local.personal.com:3002';

/**
* Receiving message from other domain
*/
// window.addEventListener('message', function(event) {
//     console.log("Started listening");
//     console.log("Event", event);
//     console.log("Origin", event.origin);

//     if (event.origin === PERMITTED_DOMAIN) {
//         if (event.data) {
//             console.log("Received message", event.data);
//             setCookie('ids', event.data, 365);
//         } else {
//             console.log("Data does not exist!");
//             deleteCookie('ids');
//         }
//     }

// });

// const ids = getCookie('ids');

// if (ids) {
//     console.log("ids", JSON.parse(ids));
// }

// A function to process messages received by the window.
function receiveMessage(e) {
    console.log(e);
    // Check to make sure that this message came from the correct domain.
    if (e.origin !== PERMITTED_DOMAIN) {
        console.log("Not allowed");
        return;
    }

    // Update the div element to display the message.
    console.log("Message received", e.data);
}

// Setup an event listener that calls receiveMessage() when the window
// receives a new MessageEvent.
window.addEventListener('message', receiveMessage);