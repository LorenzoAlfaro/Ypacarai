FROM node:carbon
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm i -g nodemon
# Copy app source code
#COPY . .
COPY . .
#Expose port and start application
EXPOSE 8080
#CMD npm start
CMD nodemon server.js