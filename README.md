# Video Games Platform

A video game management platform built with Node.js that allows users to favorite their games and create teams/groups with other players. The project follows a **modular monolith architecture** for better code organization and maintainability.

## 🎮 Features

- **User Management & Authentication** - Secure user registration and login system
- **Game Favorites** - Users can favorite and manage their preferred games
- **Teams/Groups** - Create and join teams with other players
- **RESTful API** - Well-documented API endpoints with OpenAPI/Swagger
- **Type Safety** - Built with TypeScript for robust development

## 🏗️ Architecture

This project uses a **modular monolith** architecture, organizing code into distinct modules while keeping everything in a single deployable unit. This approach provides:

- **Module Isolation** - Each feature is contained within its own module
- **Clear Boundaries** - Well-defined interfaces between modules
- **Shared Resources** - Common utilities and configurations shared across modules
- **Easy Testing** - Isolated modules are easier to test independently

### Project Structure

```
src/
├── modules/           # Feature modules
│   ├── auth/          # Authentication & authorization
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── usecases/
│   └── users/         # User management
│       ├── models/
│       └── repositories/
├── shared/            # Shared utilities and configurations
│   ├── config/        # Database and environment configuration
│   │   ├── db/
│   │   └── env/
│   └── middleware/    # Common middleware
└── server.ts          # Application entry point
```

## 🛠️ Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify (high-performance web framework)
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod for schema validation
- **Authentication**: JWT with bcryptjs for password hashing
- **Documentation**: Swagger/OpenAPI with Scalar API Reference
- **Development**: tsx for TypeScript execution and hot reloading

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🚀 Getting Started

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ViniciusCaique/video-game-node.git
   cd video-games
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/videogames
   JWT_SECRET=your-jwt-secret-key
   ```

4. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

### Option 2: Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd video-games
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database configuration
   POSTGRES_USER=your_postgres_user
   POSTGRES_PASSWORD=your_postgres_password
   DATABASE_URL=postgresql://your_postgres_user:your_postgres_password@postgres:5432/videogame
   
   # JWT configuration
   JWT_SECRET=your-jwt-secret-key
   ```

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

   This will:
   - Build the application Docker image
   - Start PostgreSQL database on port 5435
   - Run database migrations automatically
   - Start the API server on port 3000

4. **Run in detached mode (optional)**
   ```bash
   docker-compose up -d --build
   ```

### Docker Commands

- **Stop all services**:
  ```bash
  docker-compose down
  ```

- **Stop and remove volumes** (clears database data):
  ```bash
  docker-compose down -v
  ```

- **View logs**:
  ```bash
  docker-compose logs -f
  ```

- **View logs for specific service**:
  ```bash
  docker-compose logs -f api
  docker-compose logs -f postgres
  ```

- **Rebuild only the API**:
  ```bash
  docker-compose up --build api
  ```

The server will start on `http://localhost:3000`

## 📚 API Documentation

Once the server is running, you can access the API documentation:

- **Swagger UI**: `http://localhost:3000/docs`
- **Scalar API Reference**: `http://localhost:3000/swagger`

## 🧪 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the project for production
- `npm start` - Start the production server

## 🔧 Development

### Adding a New Module

To add a new feature module:

1. Create a new directory in `src/modules/`
2. Structure it with the following directories:
   - `controllers/` - Request handlers
   - `models/` - Data models and DTOs
   - `routes/` - Route definitions
   - `usecases/` - Business logic
   - `repositories/` - Data access layer

3. Register the module routes in `src/server.ts`

### Database Schema

The project uses Drizzle ORM for database operations. Schema definitions are located in `src/shared/config/db/schema/`.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🎯 Roadmap

- [ ] Game favorites functionality
- [ ] Team/group creation and management
- [ ] Game search and filtering
- [ ] User profiles and avatars