
curl -X POST -H 'Accept: application/vnd.api+json' -H 'Content-Type: application/vnd.api+json' -d '{"data": {"url":"http://website.com/api", "status":0, "interval":1}}' http://x.x.x.x:8080/page
curl  -H 'Accept: application/vnd.api+json' -H 'Content-Type: application/vnd.api+json' http://x.x.x.x:8080/pages

$.ajax('http://localhost:82/proxy/pages', {
    contentType: 'application/vnd.api+json',
    headers: {
        Accept: 'application/vnd.api+json'
    }
})

fetch('http://localhost:82/proxy/pages', {
    headers: {
        "Accept": 'application/vnd.api+json',
        "Content-type" : 'application/vnd.api+json'
    }
}).then(res => res.json()).then(console.log)

fetch('http://xxx.xxx.xxx.xxx:8080/proxy/pages', {
    headers: {
        "Accept": 'application/vnd.api+json',
        "Content-type" : 'application/vnd.api+json'
    }
}).then(res => res.json()).then(console.log)

fetch('http://xxx.xxx.xxx.xxx:8080/pages', {
    headers: {
        "Accept": 'application/json',
        "Content-type" : 'application/json'
    }
}).then(res => res.json()).then(console.log);



// working request
    // list
	fetch('http://xxx.xxx.xxx.xxx:8080/pages', {
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json()).then(console.log)

    // insert
	fetch('http://xxx.xxx.xxx.xxx:8080/page', {
	    method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                url: 'http://website.com/api/post_test_adding',
                status: 0,
                interval: 1
            }
        } || {})
    }).then(res => res.json()).then(console.log)

    //get
    fetch('http://xxx.xxx.xxx.xxx:8080/page/595e471b856940b52a5ec62a', {
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json()).then(console.log)

    // delete
    59bf973ccbb458241c44ff95
	fetch('http://xxx.xxx.xxx.xxx:8080/page/59bf973ccbb458241c44ff95', {
	    method: 'DELETE',
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json()).then(console.log)

    // edit
	fetch('http://xxx.xxx.xxx.xxx:8080/page/59c43b40cbb458357ce6dff4', {
	    method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                url: 'http://website.com/api/post_test_adding6-EDITED',
                status: 0,
                interval: 1
            }
        } || {})
    }).then(res => res.json()).then(console.log)


    curl -X POST -H 'Accept: application/json'
    -H 'Content-Type: application/json'
    -d '{"data": {"url":"http://website.com/api/post_test_adding", "status":0, "interval":1}}'
    xxx.xxx.xxx.xxx:8080/page

curl  -H 'Accept: application/json' -H 'Content-Type: application/json' http://xxx.xxx.xxx.xxx:8080/pages