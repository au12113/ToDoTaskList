FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install all dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]