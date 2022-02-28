FROM node:14.18.1-alpine as build

WORKDIR /app

COPY web ./
COPY .npmrc ./

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn workspace cccev-app build

FROM nginx:1.17.0-alpine

COPY --from=build /app/packages/cccev-app/build /var/www
COPY infra/docker/cccev-web-app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
