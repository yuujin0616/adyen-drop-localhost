***Please read this before trying out the integration in this repository***

Preface: I understand that this assignment is a request for me to have a fully working Drop-in integration on the Sesssions flow. 
I must admit beforehand that my knowledge in the Ecom realm is rather limited given my role as dedicated IPP Tech support since joining Adyen and my coding languages background only includes HTML and CSS.
Hence, please forgive the very simple integration in this submission, and the various workarounds that I've had to put in to get the integration to function.

1) For the /sessions call, I have attempted to create the code for the sessions request and response to be parsed automatically onto the Drop-in, but was not successful in doing so.
Therefore for testing my integration, I made POST calls using Postman to the sessions endpoint, retrieved the SessionId and SessionData from there, then inserted it into my integration to make the payment.

2) I understand that the latest version of the drop-in is 6.18.1, but the latest version that is useable with the HTML script tag for importing the adyen.js and adyen.css files that I could find was 5.49.0, so I'm using that in the checkout page.

3) Please use the **checkout.html** file only as the front-end file for the integration; I had another e-commerce demo site set up in the repository, but ultimately was not successful in linking the backend of that site to the integration, so I pivoted to using the **checkout.html** as a standalone page for testing the integration.

4) I have performed 2 test transactions using my integration with the credentials provided in the assignment, and the corresponding PSP references are **ZNNPGBBJTT24NDV5** and **G72XPMS82XF7JFV5**.

