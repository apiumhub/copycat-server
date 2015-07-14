# copycat-server

#Basic information:

Copycat-Server is a server, which behaviour is controlled via REST API.

Useful data:

-When server is running, is listening port 8000.

-To configure the response of the server (code and headers), use the route "POST /configure".

-Include in that call a body with format (json example):
    {
    "headers": {
    		"header 1": "content",
	    	"header 2": "content"
		   	 },
    "code": "200"
    }

-To obtain the configured response from server, use any other call to the API (no matter the route or the method).

#Instalation:

apt-get install -g nodejs

npm install express

npm install body-parser

#Run server:

node copycat.js