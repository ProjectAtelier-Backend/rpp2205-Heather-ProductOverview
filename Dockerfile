FROM node:18-alpine

RUN npm install --global nodemon

WORKDIR /productOverview-api

EXPOSE 3001

COPY package.json /productOverview-api/package.json

RUN npm install

COPY . /product-api

CMD ["npm", "start"]