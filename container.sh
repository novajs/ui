#!/usr/bin/env bash
pushd "/usr/share/nginx/"

echo "executing gulp watch"
gulp watch &

echo "starting nginx"
nginx -g "daemon off;"
