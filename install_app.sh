#!/usr/bin/env bash

cd api && yarn install
cd ../client && yarn install
cd .. && ./dev.sh