FROM node:21

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/front
RUN npm install
WORKDIR /usr/src/app/backend
RUN npm install
WORKDIR /usr/src/app
RUN npm run build

RUN rm -r front

EXPOSE 3000

CMD npm start