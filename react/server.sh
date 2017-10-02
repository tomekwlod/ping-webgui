#!/bin/bash


SERVER_HOST=0.0.0.0
SERVER_PORT=82

kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | head -1 | awk '{print $2}') &> /dev/null && echo 'killed' || echo 'nothing to kill'
kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | head -1 | awk '{print $2}') &> /dev/null
kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | head -1 | awk '{print $2}') &> /dev/null
kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | head -1 | awk '{print $2}') &> /dev/null
kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | head -1 | awk '{print $2}') &> /dev/null

if [ "$#" == 0 ] || [ "$#" -gt 1 ] ; then
	echo "> call: /bin/bash start";
	echo "to start server"
else

    yarn server $SERVER_HOST $SERVER_PORT pingserver & disown

    sleep 3

    echo 'testing servers...';

    curl "${SERVER_HOST}:${SERVER_PORT}" &> /dev/null && echo 'SERVER     : is working' || echo 'SERVER     : not working';

fi