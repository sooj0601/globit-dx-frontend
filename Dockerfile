# FROM node:20-alpine AS development-dependencies-env
# FROM node:20-alpine
# FROM node:20-alpine

FROM node:22.12.0-alpine


# COPY ./dx-frontend/ /app/
WORKDIR /app

COPY ./dx-frontend/ .

# RUN rm -rf node_modules
# RUN npm install @rollup/rollup-linux-x64-gnu @rollup/rollup-linux-arm64-musl --save-optional

RUN rm -rf node_modules
RUN rm -rf package-lock.json

RUN npm install

# RUN npm i @rollup/rollup-linux-arm64-musl

# RUN npm install @rollup/rollup-linux-x64-gnu @rollup/rollup-linux-arm64-musl --save-optional

# RUN npm install --no-optional

# FROM node:20-alpine AS production-dependencies-env
# COPY ./dx-frontend/package.json ./dx-frontend/package-lock.json /app/
# WORKDIR /app
# RUN npm ci --omit=dev

# FROM node:20-alpine AS build-env
# COPY ./dx-frontend/ /app/
# COPY --from=development-dependencies-env /app/node_modules /app/node_modules
# WORKDIR /app
# RUN npm run build

# FROM node:20-alpine
# COPY ./dx-frontend/package.json ./dx-frontend/package-lock.json /app/
# COPY --from=production-dependencies-env /app/node_modules /app/node_modules
# COPY --from=build-env /app/build /app/build
# WORKDIR /app
# RUN npm install -g serve
EXPOSE 5173

CMD ["npm", "run", "dev"]