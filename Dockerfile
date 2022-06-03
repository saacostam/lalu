FROM node:14.17.4-stretch
RUN mkdir /lalu_web
COPY /lalu_wa /lalu_web

WORKDIR /lalu_web
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
EXPOSE 8080
CMD ["npm", "run", "serve"]