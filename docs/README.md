
# CuidadorApp - Monorepo

Este repositorio contiene todos los módulos del proyecto **CuidadorApp**, organizados en un monorepo para facilitar la colaboración y el mantenimiento.

## 📂 Estructura del proyecto
- **backend/** → API REST en Java con Spring Boot.
- **frontend/** → Aplicación web (React/Angular/Vue).
- **database/** → Scripts y migraciones de base de datos (MySQL).
- **docs/** → Documentación técnica y guías de onboarding.

## 🚀 Cómo empezar
1. Clona el repositorio:
   bash
   git clone https://github.com/BrianSilenT/CuidadorApp-MonoRepo.git
   
2. Entra en la carpeta `backend` y compila el proyecto:
   bash
   cd backend
   ./mvnw spring-boot:run
   
3. El backend estará disponible en `http://localhost:8080`.

## 🤝 Contribución
- Cada colaborador trabaja en su carpeta asignada (`frontend`, `database`, `docs`).
- Se recomienda crear una rama por feature:
  bash
  git checkout -b feature/nueva-funcionalidad
  
- Haz commit y push de tus cambios, luego abre un Pull Request.

## 📌 Notas
- Los saltos de línea están normalizados con `.gitattributes` para evitar conflictos entre sistemas operativos.
- Usa `README.md` en cada carpeta para documentar el propósito y estado del módulo.




## 🔹 README del backend (`backend/README.md`)

markdown
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
  



## 🚀 Siguiente paso
1. Crea los archivos en tu repo local:  
   bash
   echo "contenido del README principal" > README.md
   echo "contenido del README backend" > backend/README.md
   
2. Haz commit y push:  
   bash
   git add README.md backend/README.md
   git commit -m "Agregado README principal y README del backend"
   git push origin main
   
