FROM node:23-alpine

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install -g @quasar/cli && npm install

# Agora copia o resto do projeto
COPY . .

EXPOSE 8080
CMD ["quasar", "dev"]
