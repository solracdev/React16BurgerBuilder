
# base image
FROM node:alpine

# set working directory
RUN mkdir -p /usr/src/app

# copy all files from current directory to docker
COPY . /usr/src/app

# setup workdir for the app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

# start app
CMD ["npm", "start"]