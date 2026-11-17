FROM node:26-alpine AS build
RUN npm install -g yarn@1.22.22
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.30-alpine
COPY --from=build /app/dist /usr/share/nginx/html
