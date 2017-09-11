FROM node:8.4

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /app/

COPY package.json yarn.lock .editorconfig /app/
COPY config /app/config

RUN yarn cache clean && \
    yarn && \
    true

COPY . /app

CMD npm run watch
