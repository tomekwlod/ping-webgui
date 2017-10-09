[![Build Status](https://travis-ci.org/stopsopa/ping-webgui.svg?branch=master)](https://travis-ci.org/stopsopa/ping-webgui)


Curl example query:
---

    curl -X POST -H 'Accept: application/vnd.api+json' -H 'Content-Type: application/vnd.api+json' -d '{"data": {"url":"http://website.com/api", "status":0, "interval":1}}' http://x.x.x.x:8080/page



API
---

- https://github.com/tomekwlod/ping/blob/master/main.go#L333


Installation
---

    mkdir xxx
    cd xxx
    git clone git@github.com:stopsopa/ping-webgui.git .
    cd app
    cp config.js.dist config.js
    
     
    

then setup app/config.js manually

    cd ../react
    yarn
    yarn prod
    sudo node index.server.js
    
     
    
