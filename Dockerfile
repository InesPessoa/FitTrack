FROM node:18

ARG ENVIRONMENT

ENV ENVIRONMENT ${ENVIRONMENT}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build