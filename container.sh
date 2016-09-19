#!/bin/bash
pushd "/usr/share/nginx/"

echo "starting nginx"
nginx -g "daemon off;"
