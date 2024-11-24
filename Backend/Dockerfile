FROM alpine:latest AS build
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN apk add nodejs npm
RUN npm install -g npm@10.6.0
RUN npm i
EXPOSE  3001
CMD [ "node", "./app/app.js"]
