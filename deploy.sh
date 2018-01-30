cd front
rm -rf node_modules
npm i
ng build --prod

cd ../server
rm -rf node_modules
npm i
npm run prod
cd dist
pm2 delete server-prod.js
pm2 start server-prod.js
