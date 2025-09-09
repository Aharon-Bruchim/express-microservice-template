# Template Service

A Node.js template service built with Express, MongoDB, and TypeScript.

## Features

- **Express.js** server with modular routing
- **MongoDB** integration with Mongoose ODM
- **TypeScript** for type safety
- **Zod** for request validation
- **Winston** for logging
- **Helmet** for security headers
- **CORS** configuration
- Environment-based configuration
- Error handling middleware
- RESTful API structure

## Prerequisites

- Node.js (v18 or higher)
- MongoDB instance
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd template
```

2. Install dependencies:

```bash
npm install
```

3. Create environment files:

```bash
touch .env.development
touch .env.production
```

4. Configure environment variables in `.env.development`:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/your-database
TEMPLATE_SERVICE=templates  # Change to your collection name
CORS_ORIGIN=http://localhost:5173
```

## Scripts

- `npm start` - Run the production build
- `npm run dev` - Run in development mode with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm test` - Run tests with Vitest UI and coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run prettier` - Check code formatting
- `npm run prettier:fix` - Fix code formatting
- `npm run knip` - Check for unused dependencies and exports

## API Endpoints

### Template Routes

All template endpoints are prefixed with `/api/template`

| Method | Endpoint | Description            |
| ------ | -------- | ---------------------- |
| GET    | `/`      | Get templates by query |
| GET    | `/count` | Get count of templates |
| GET    | `/:id`   | Get template by ID     |
| POST   | `/`      | Create new template    |
| PUT    | `/:id`   | Update template        |
| DELETE | `/:id`   | Delete template        |

### Health Check

- `GET /health` - Returns 'alive' with status 200
- `GET /isAlive` - Returns 'alive' with status 200
- `GET /isalive` - Returns 'alive' with status 200

## Query Parameters

### GET /api/template

- `step` (number): Pagination step (default: 0)
- `limit` (number): Number of items per page (optional)
- `search` (string): Search term (optional)
- `name` (string): Filter by name (optional)
- `email` (string): Filter by email (optional)

## Request/Response Examples

### Create Template

```json
POST /api/template
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update Template

```json
PUT /api/template/:id
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

## Project Structure

```
src/
├── config.ts                 # Configuration management
├── index.ts                  # Application entry point
├── corsConfig.ts            # CORS configuration
├── express/
│   ├── server.ts            # Express server setup
│   └── router.ts            # Main router
├── template/
│   ├── controller.ts        # Request handlers
│   ├── manager.ts          # Business logic
│   ├── model.ts            # Mongoose model
│   ├── interface.ts        # TypeScript interfaces
│   ├── router.ts           # Template routes
│   └── validations.ts      # Zod schemas
└── utils/
    ├── errors/             # Custom error classes
    ├── express/            # Express utilities
    ├── logger/             # Winston logger setup
    └── zod/                # Zod utilities
```

## Environment Configuration

The application supports multiple environments:

- **Development**: Uses `.env.development`
- **Production**: Uses `.env.production`

Environment is determined by the `NODE_ENV` variable.

## Error Handling

The application includes centralized error handling:

- Validation errors (Zod)
- Document not found errors
- MongoDB errors
- General application errors

All errors are logged using Winston and returned with appropriate HTTP status codes.

## Security

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configurable cross-origin resource sharing
- **Input Validation**: All inputs validated using Zod schemas
- **Environment Variables**: Sensitive data stored in environment files

## Development

1. Start MongoDB locally
2. Run development server:

```bash
npm run dev
```

3. The server will start on the configured PORT (default: 8000)

## Testing

Run tests with coverage:

```bash
npm test
```

## Building for Production

1. Build the TypeScript code:

```bash
npm run build
```

2. Set NODE_ENV to production:

```bash
export NODE_ENV=production
```

3. Start the server:

```bash
npm start
```

## License

ISC

## Author

Vision
