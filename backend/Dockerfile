FROM node:23.11.1-alpine3.22
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
CMD ["npm","run", "dev"]
