#!/bin/bash

mkdir snapshots -p

NOW=$(date +%Y-%m-%d-%H-%M-%S);

FILE=snapshots/$NOW-snapshot.log;

echo "$NOW before and after restart:" >> $FILE
ps aux | head -n 1 >> $FILE
ps aux | grep pingserver | grep -v grep | grep -v "sh -c" | grep -v yarn >> $FILE


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

    node index.server.js pingserver & disown

    sleep 3

    ps aux | grep pingserver | grep -v grep | grep -v "sh -c" | grep -v yarn >> $FILE

    echo 'testing servers...';

    curl "${SERVER_HOST}:${SERVER_PORT}" &> /dev/null && echo 'SERVER     : is working' || echo 'SERVER     : not working';

fi

echo ""
echo ""
echo "Last memory snapshots:"
echo "$NOW - current time"
echo ""
cat snapshots/* | tail -n 16
