FROM node:10.3.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "run", "migrate-and-start"]