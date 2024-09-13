FROM node:18

WORKDIR /server

COPY ./package*.json ./
RUN yarn install
COPY . .

ENV NUXT_PORT=3000
ARG PORT
ENV PORT=3000
ENV NODE_ENV=production
EXPOSE 3000

RUN yarn run build
CMD [ "yarn", "start" ]
#CMD [ "yarn", "dev" ]
#CMD [ "npx", "http-server", "./public", "-p 3000" ]