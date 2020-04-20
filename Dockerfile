# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10
#FROM mongo
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
#RUN apt-get update && apt-get install nodejs npm -y
WORKDIR /usr/src/app
# Copies package.json and package-lock.json to Docker environment
COPY server/package*.json ./
# Installs all node packages
RUN npm install
# Copies everything over to Docker environment
COPY . .
# Uses port which is used by the actual application
EXPOSE 3001
# Finally runs the application
CMD [ "node", "server/app.js","--host 0.0.0.0", "--disable-host-check"]
