# --- Stage 1: Build Stage ---
# Use a specific, lightweight Node.js Alpine image for building.
# This stage will install all dependencies (including dev if any are needed for build steps)
# and prepare your application.
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json first.
# This allows Docker to cache this layer. If only your source code changes,
# npm install won't be re-run, speeding up subsequent builds.
COPY package.json package-lock.json ./

# Install dependencies.
# '--omit=dev' ensures that only production dependencies are installed.
# This is crucial for keeping the final image size down.
RUN npm ci --omit=dev

# Copy the rest of your application code.
# The .dockerignore file (in the same directory as this Dockerfile)
# will prevent unnecessary files (like node_modules from your host, .git, etc.)
# from being copied into this build stage.
COPY . .

# If you have any build steps (e.g., TypeScript compilation, bundling),
# they would go here.
# Example for TypeScript (uncomment if applicable):
# RUN npm install -g typescript # Install TypeScript compiler
# COPY tsconfig.json ./ # Copy TypeScript configuration
# RUN tsc --build # Compile TypeScript code

# --- Stage 2: Production/Runtime Stage ---
# Start with a fresh, even leaner base image for the final production image.
# This image will only contain what's absolutely necessary to run your application.
FROM node:20-alpine

# Set the working directory inside the container.
WORKDIR /app

# Set NODE_ENV to production. This can optimize Node.js runtime behavior
# and some packages might install fewer things or behave differently.
ENV NODE_ENV=production

# Copy only the necessary files from the 'builder' stage.
# We copy the node_modules that were installed with '--omit=dev'
# and your application's source code (including your 'schema' folder).
# If you had a build step (e.g., TypeScript), you'd copy the compiled output:
# COPY --from=builder /app/dist ./dist # Example: copy compiled JS from 'dist'
COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app ./ 

# Expose the port your Express application listens on
EXPOSE 3000

# Command to run your application when the container starts.
CMD ["node", "index.js"]