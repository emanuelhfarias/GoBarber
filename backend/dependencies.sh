#!/bin/bash

# development docker dependencies
docker run -td -p 5432:5432 -v $(pwd)/db:/var/lib/postgresql/data postgres
docker run -td -p 27017:27017 mongo
docker run -td -p 6379:6379 redis:alpine

# queue
yarn queue
