FROM node:14.17.4-stretch
RUN mkdir /lalu_web
COPY /lalu_wa_https /lalu_web

WORKDIR /lalu_web
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]