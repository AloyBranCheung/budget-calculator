FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn global add typescript
RUN yarn install 
RUN yarn build
CMD ["yarn", "preview"]