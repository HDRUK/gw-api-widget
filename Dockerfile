FROM node:14

WORKDIR /var/www

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3004

CMD ["npm", "run", "build:start"]