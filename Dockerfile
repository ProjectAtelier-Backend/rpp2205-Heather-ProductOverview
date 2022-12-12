FROM node:16.3.0-alpine

WORKDIR /productOverview-api

EXPOSE 3001

COPY package.json /productOverview-api/package.json

RUN npm install

COPY . /product-api

CMD ["npm", "start"]