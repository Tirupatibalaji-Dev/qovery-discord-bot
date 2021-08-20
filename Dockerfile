FROM node:16
WORKDIR src
COPY package.json .
RUN npm install && npm install typescript -g
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]