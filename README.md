# NOC App

NOC App es una aplicación desarrollada con Node.js para la gestión y monitoreo de las operaciones del NOC.

## Instalación

### 1. Clonar el archivo .env.template como .env:
```
cp .env.template .env
```

### 2. Configurar las variables de entorno en el archivo .env.

### 3. Instalar las dependencias:
```
npm i
```

### 4. Inicializar las bases de datos:
```
docker compose up -d
```

### 5. Ejecutar la aplicación en modo desarrollo:
```
npm run dev
```