FROM node:12
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN apt-get update \
&& apt-get install -y ghostscript \
&& apt-get install -y graphicsmagick
RUN npm install
COPY . /usr/src/app/
EXPOSE 3000
CMD [ "node", "--inspect", "dist/main.js" ]