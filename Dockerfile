FROM node:14

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

RUN npm install --only=production
COPY . .
RUN npm run build

CMD npm run start
