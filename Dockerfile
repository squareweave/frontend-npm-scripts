FROM node:13.1

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /app/

COPY package.json package-lock.json .editorconfig /app/
COPY config /app/config

RUN npm install

COPY . /app

CMD npm run build
