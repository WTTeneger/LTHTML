FROM node:16.13.1-alpine3.14
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "serve"]
