### Make a root directory

## mkdir backend and intialize a hono project

## make two folder in the root folder i.e backend and frontend

## add common routes in src/index.ts

## get database url and connection pool url from neon and prisma accelerate respectively.

# put connection pool url in wrangler.toml and main database url in .env

# migrate database using npx prisma migrate dev --name init_schema

# generate prisma client npx prisma generate --no-engine

# Add the accelerate extensionnpm install @prisma/extension-accelerate
 
# Initialize the prisma client
# import { PrismaClient } from '@prisma/client/edge'
# import { withAccelerate } from '@prisma/extension-accelerate'