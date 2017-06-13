PATH =$PATH:$(npm bin)
set -x

ng build --prod

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

cd dist 
ws -c