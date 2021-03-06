FROM node:12.9.0-alpine

WORKDIR /var/www/html

COPY ./package.json ./

COPY ./yarn.lock ./

RUN apk add --no-cache bash && \
  yarn cache clean && \
  yarn install

COPY . .

EXPOSE 3000

CMD [ "./wait-for-it.sh", "database:3306", "--", "yarn", "dev" ]