FROM node:14

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "build:start"]