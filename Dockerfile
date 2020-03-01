FROM node:10
# Set the working directory to /src
RUN mkdir /src
WORKDIR /src
# Copy the package.json file to /usr/app
COPY package*.json /src/
RUN npm install
# Copy all the files from the project’s root to /usr/app
COPY . /src
RUN npm run build
ENV PORT 3000
CMD npm start