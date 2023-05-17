FROM node:19

WORKDIR /

## Add the wait script to the image
COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait

## Otherwise you can directly download the executable from github releases. E.g.:
#  ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.11.0/wait /wait
#  RUN chmod +x /wait

COPY package.json .
RUN npm install
COPY . .

## Launch the wait tool and then your application
CMD /wait && npm run seed && npm test
