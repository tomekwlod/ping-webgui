#!/bin/bash

LOGDIR=logs;

mkdir snapshots -p
mkdir ${LOGDIR} -p

NOW=$(date +%Y-%m-%d-%H-%M-%S);

FILE=snapshots/$NOW-snapshot.log;

LOGFILE="${LOGDIR}/${NOW}.log"

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

    # standard way of running server, but if it's gonna crash, there is no way to restart it automatically
    # node index.server.js pingserver 1>> ${LOGFILE} 2>> ${LOGFILE} & disown

    # i tested nodemon too but it seems to just run/restart when file change,
    # don't restart after process crush (that's different behaviour)
    # so it's not good neither
        # to test run to kill: kill -SIGTERM $(ps aux | grep "pingserver" | grep -v grep | grep -v nodemon | grep -v "sh " | head -1 | awk '{print $2}') &> /dev/null
    # nodemon --delay 3 -V index.server.js pingserver 1>> ${LOGFILE} 2>> ${LOGFILE} & disown


    # third solution is "forever" tool installed from npm globally
        # to test run to kill:
        # kill -SIGTERM $(ps aux | grep 'react/index.server.js' | grep -v grep | head -1 | awk '{print $2}') &> /dev/null
    # before install forever globally ->   npm install -g forever
    forever --minUptime 5000 -v -a -c node index.server.js pingserver 1>> ${LOGFILE} 2>> ${LOGFILE} & disown
    # --minUptime      Minimum uptime (millis) for a script to not be considered "spinning" (5000 -> 5 sec)
    # --minUptime not set. Defaulting to: 1000ms
    # --spinSleepTime  Time to wait (millis) between launches of a spinning script.
    # --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms

    sleep 3

    ps aux | grep pingserver | grep -v grep | grep -v "sh -c" | grep -v yarn >> $FILE

    echo 'testing servers...';

    curl "${SERVER_HOST}:${SERVER_PORT}" &> /dev/null && echo 'SERVER     : is working' || echo 'SERVER     : not working';

    echo "check also log file of this process ${LOGFILE}";

fi

echo ""
echo ""
echo "Last memory snapshots:"
echo "$NOW - current time"
echo ""
cat snapshots/* | tail -n 16
