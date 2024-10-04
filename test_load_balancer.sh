#!/bin/bash

# Make 100 curl requests to localhost:300
REQUESTS=12

URL="http://localhost:3000"

# Start 100 concurrent curl requests
for ((i=1; i<=REQUESTS; i++)); do
    curl -s $URL &
    echo "Request $i sent"
done

wait
echo "All requests completed"
