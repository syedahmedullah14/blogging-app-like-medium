# Blogging App Like Medium

This is a blogging application inspired by Medium, developed as part of Cohort 2.0 by Harkirat. The project is built from scratch using a modern tech stack and deployed on Vercel and Cloudflare Workers.

## Live Demo
Check out the live app [here](https://blogging-app-like-medium.vercel.app/).
## Features

-   User Authentication (JWT)
-   Skeleton Loading for a smoother user experience
-   Connection Pooling with Prisma
-   Type Inference and Validation with Zod

## Tech Stack

### Frontend

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A build tool that significantly improves the development experience.
-   **Skeleton Loading**: For enhanced UX during data fetches.

### Backend

-   **Cloudflare Workers**: Serverless functions for handling backend logic.
-   **TypeScript**: A strongly typed programming language that builds on JavaScript.
-   **Prisma**: ORM for database interaction with connection pooling.
-   **PostgreSQL**: The relational database used.
-   **Zod**: For schema validation and type inference.
-   **JWT**: For secure authentication.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

-   Node.js
-   PostgreSQL

### Installation

 1.  Clone the repository:
	

	    git clone https://github.com/syedahmedullah14/blogging-app-like-medium.git

 2. Navigate to the project directory:
 

	    cd blogging-app-like-medium

 3. Install the dependencies:
	 

		npm install

 ### Configuration

1.  Set up your environment variables. Create a `.env` file in the root directory and add the following:
	

	    DATABASE_URL=your_postgres_connection_string
		JWT_SECRET=your_jwt_secret

2. Configure Cloudflare Workers and Vercel for deployment (refer to their respective documentation for detailed steps).

### Running the Application

 1. Start the backend (Cloudflare Workers) and frontend (Vercel):
 

		#For the backend
		npm run start:backend

		#For the frontend
		npm run dev

 2. Open http://localhost:3000 to view the application in your browser.
 
## Deployment

### Backend

Deploy the backend using Cloudflare Workers. Follow the Cloudflare Workers documentation for detailed deployment instructions.

### Frontend

Deploy the frontend on Vercel. Follow the Vercel documentation for detailed deployment instructions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
