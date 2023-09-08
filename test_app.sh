#!/usr/bin/env bash

echo("Changing working directory to api/")
cd api
echo("Linting api")
yarn lint
echo("Testing api")
echo("Changing working directory to client/")
cd ../client
echo("Linting client")
yarn lint 
echo("Testing client")