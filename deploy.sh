#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

# Start docker
#sudo service docker start

# Set env variables
readonly SSH_PSWD=raspberry
readonly PROJECT_NAME=b-control-backend
readonly TARGET_HOST=pi@192.168.178.201
readonly TARGET_PATH=/var/www/html
readonly SOURCE_PATH=./dist/b-control-frontend/*

export PKG_CONFIG_ALLOW_CROSS=1

# Build project
ng build

# Delete target directory on target
sshpass -p ${SSH_PSWD} ssh ${TARGET_HOST} 'rm -rf /var/www/html/*'

# Copy binary to target
sshpass -p ${SSH_PSWD} scp ${SOURCE_PATH} ${TARGET_HOST}:${TARGET_PATH}
