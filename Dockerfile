FROM node

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]