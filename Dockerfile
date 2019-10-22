FROM node:12.9.0-alpine

WORKDIR /var/www/html

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn cache clean && yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]