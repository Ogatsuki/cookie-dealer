from node:22-alpine

workdir /app

copy package*.json ./

run npm ci

copy . .

run npm run build

cmd ["npm", "run", "start"]