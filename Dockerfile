FROM --platform=linux/amd64 node:18-alpine

RUN npm install --global nodemon

WORKDIR /rpp2205-Heather-productOverview

EXPOSE 3001

COPY package.json /rpp2205-Heather-productOverview/package.json

RUN npm install

COPY . /rpp2205-Heather-productOverview

CMD ["npm", "start"]