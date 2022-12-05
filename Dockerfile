FROM node:16-alpine

WORKDIR /app
ENV NUXT_HOST 0.0.0.0

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn generate

CMD yarn start
