FROM node:13.1

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /app/

COPY package.json package-lock.json .eslintignore .eslintrc.js .stylelintignore .stylelintrc.js /app/
COPY config /app/config

RUN npm install

CMD npm run build
