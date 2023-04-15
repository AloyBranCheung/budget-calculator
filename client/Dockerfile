FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn global add typescript
RUN yarn install 
CMD ["yarn", "dev"]