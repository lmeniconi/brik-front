FROM node:14-alpine

WORKDIR /app
ENV NUXT_HOST 0.0.0.0

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD npm run start
