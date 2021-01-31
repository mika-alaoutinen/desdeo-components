FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent
COPY . .

EXPOSE 8081
CMD ["npm", "run", "storybook"]