FROM node:12-stretch

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node . .

RUN npm ci

CMD ['node', 'index.js']