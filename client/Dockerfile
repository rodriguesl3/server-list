FROM node:14 as builder
COPY . ./app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]