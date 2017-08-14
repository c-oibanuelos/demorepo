FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .
RUN npm install

# Bundle app source
COPY . .

# Map docker daemon to port 8080
EXPOSE 8080

# Command to run the app
CMD [ "npm", "start" ]

