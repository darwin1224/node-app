#!/bin/bash

docker-compose down -v

docker-compose up -d --build

docker-compose ps

docker system prune --volumes -f