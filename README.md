# Pack Digital Platform

## Repo Overview

This is a mono-repo using yarn workspaces

### Design Guidelines

Should easily handle the following:

- 20,000 Products per shop
- 500,000 Product Variants per shop

## Development

**Requirements**

1. Node 12
2. Yarn
3. Docker - [install for mac](https://docs.docker.com/docker-for-mac/)

**First Time**

1. `cp .env.sample .env` and set variables as needed

### Workflow

1. `yarn` to install dependencies
2. `yarn start` to start all services with one command
3. Access the Hasura console at [localhost:8000](http://localhost:8000/)
