#!/bin/sh
set -e

#npm install --only=production
if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi


exec "$@"
