FROM node:8.4

WORKDIR /app/

COPY package.json yarn.lock config .editorconfig /app/

RUN yarn && \
    true

COPY . /app

CMD npm run watch
