#!/bin/bash
# quick one-liner to serve visualiser for dev purposes ONLY

set -u

SERVE_PORT=8081

echo "URL to access pages: http://$(hostname):$SERVE_PORT"
python3 -m http.server "$SERVE_PORT"
