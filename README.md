# App Backend + Frontend

Aplicação Backend + Frontend em containers separados no docker, sob a mesma URL.

## Preparação

Preparar o arquivo de configuração:
```
cp .env.example .env
```

Para ter acesso à url da aplicação, é necessário editar o arquivo `/etc/hosts` e adicionar a linha:
```
127.0.0.1   node-app.local
```

Iniciar os containers. Na primeira execução, o docker irá baixar e processar as imagens e criar os containers.
```
docker compose up -d
```

Instalar as dependências do frontend
```
docker compose exec frontend bash
npm install
```

Instalar as dependências do backend Node
```
docker compose exec backend bash
npm install
```

Instalar as dependências do backend Laravel
```
docker compose exec backend-laravel bash
cp .env.example .env
composer install
php artisan key:generate
```

## Uso

Iniciar os containers
```
docker compose up -d
```

A aplicação estará disponível em [http://node-app.local](http://node-app.local)

A API Node estará disponível em [http://node-app.local/api/v1](http://node-app.local/api/v1)

A API Laravel estará disponível em [http://node-app.local/api/v2](http://node-app.local/api/v2)

## Notas

[2024-02-13]

- [x] Criação do projeto
- [x] Frontend em Vue (com vite e tailwindcss)
- [x] Backend em Node (com express)
- [x] Backend em Laravel
- [x] Versionamento das apis
    - [x] v1 para o backend em node
    - [x] v2 para o backend em laravel
- [x] Serviço no Vue para consumir a api
    - [x] Configuração da versão de uso no construtor
