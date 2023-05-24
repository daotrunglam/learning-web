# syntax=docker/dockerfile:1

FROM node:14-alpine
#chuan bi moi truong nodejs, version node14/alpine

WORKDIR /nem/backend

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli 

COPY . .

RUN npm run build-src

CMD [ "npm", "run", "build"]

# docker build --tag node-docker .
# docker run -p 3030:3030 -d node-docker