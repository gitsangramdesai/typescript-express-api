rimraf dist

export NODE_ENV=developement

tsc -p ./tsconfig.build.json --pretty

cp -R src/public dist/src/public

cp   js-package.json dist/src/package.json

cp   runServer.sh dist/src/runServer.sh

cp .env dist/src/

cp -R src/views dist/src/views