FROM node:9
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install
#Copy the build folder files
#COPY dist /app
CMD node server/index.js
EXPOSE 3010