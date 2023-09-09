#!/usr/bin/env bash

function console_message () {
    local PURPLE='\x1B[0;35m'
    local NC='\x1B[0m'
    local upper_string=$(echo "\ *****$1*****" | tr '[:lower:]' '[:upper:]')
    echo -e "\e[1m${PURPLE}$upper_string${NC}\e[0m"
}

# api
console_message "Changing working directory to api"
cd api
# eslint
console_message "Linting api"
yarn lint
# test
console_message "Testing api"

# client
console_message "Changing working directory to client"
cd ../client

#eslint
console_message "Linting client"
yarn lint 

console_message "Testing client"
# jest tests
console_message "Running jest tests"
yarn jest ./__tests__
# playwright tests
console_message "Running playwright e2e tests"
yarn test-e2e