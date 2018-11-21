# smart people already figured out how to install node
# FROM mhart/alpine-node:7 
FROM resinci/npm-x86_64-ubuntu-node10

# create a work directory inside the container
RUN mkdir /app
WORKDIR /app

# Expose the port outside of the container
EXPOSE 3000

# install utilities. I currently like yarn
RUN npm install -g yarn nodemon typescript
# install dependencies
RUN yarn

#key for mongodb
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 
#list file for mongo
#RUN echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
#RUN apt-get update
#RUN apt-get install -y mongodb-org