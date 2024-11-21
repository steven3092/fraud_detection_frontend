FROM node:14-alpine

WORKDIR /app
COPY . /app
ENV NODE_ENV=development
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]