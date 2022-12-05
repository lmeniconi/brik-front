FROM node:14-alpine

WORKDIR /app
ENV NUXT_HOST 0.0.0.0

COPY package.json package-lock.json ./
RUN npm install --force

COPY . .
RUN npm run generate

CMD npm run start
