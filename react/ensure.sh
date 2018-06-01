#!/bin/bash

TEST=$(ps aux | grep pingserver | grep -v grep);

if [ "$TEST" == "" ]; then
    /bin/bash server.sh start
fi

