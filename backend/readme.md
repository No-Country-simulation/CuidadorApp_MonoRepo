# Backend - CuidadorApp

Este módulo contiene la API REST desarrollada en **Java + Spring Boot** para el proyecto CuidadorApp.

## ⚙️ Tecnologías
- Java 17
- Spring Boot
- Maven
- MySQL (base de datos)

## 🚀 Cómo ejecutar
1. Desde la carpeta `backend`:
   bash
   ./mvnw spring-boot:run
   
2. El servidor se levantará en:
   
   http://localhost:8080
   

## 📂 Estructura
- `src/main/java/com/cuidadorapp/backend` → Código fuente.
- `src/main/resources` → Configuración y properties.
- `pom.xml` → Dependencias y configuración de Maven.

## ✅ Endpoints principales
- `GET /pacientes` → Listar pacientes.
- `POST /pacientes` → Crear paciente.
- `GET /pagos` → Listar pagos.
- `POST /pagos` → Registrar pago.

## 🤝 Contribución
- Mantener consistencia en nombres de entidades y controladores.
- Documentar nuevos endpoints en este README.
- Validar con Postman antes de subir cambios.
  

## 🔹 Pasos para agregarlo

1. Entra en la carpeta `backend`:
   bash
   cd backend
   

2. Crea el archivo:
   bash
   echo "# Backend - CuidadorApp
   Este módulo contiene la API REST desarrollada en **Java + Spring Boot** para el proyecto CuidadorApp.
   ..." > README.md
   

3. Haz commit y push:
   bash
   git add README.md
   git commit -m "Agregado README al backend"
   git push origin main
   

