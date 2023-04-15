FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn global add typescript
RUN yarn install 
RUN yarn build
CMD ["node", "dist/server.js"]