FROM node:8.6

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /app/

COPY package.json yarn.lock .editorconfig /app/
COPY config /app/config

RUN npm install --global yarn && \
    yarn && \
    yarn cache clean && \
    true

COPY . /app

CMD npm run watch
