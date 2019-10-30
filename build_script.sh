git pull origin master
npm install
npm run build
pm2 start process.yml
pm2 log express_typeScript_boilerplate