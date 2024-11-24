FROM alpine:latest AS build
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN apk add nodejs npm
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]

