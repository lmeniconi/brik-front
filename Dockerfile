FROM node:14-alpine

WORKDIR /app
ENV NUXT_HOST 0.0.0.0

COPY . .
RUN yarn
RUN yarn build

CMD yarn start
