# Ven10 Developer Technical Challenge

## Quick Start

```
# change default.json file in config folder

# this file is located in config/default.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/ven-10",

```

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

# REST API

The REST API to the app is described below.

## Get list of all Products

### Request

`GET /api/product`

`http://localhost:5000/api/product`

## Get a specific Thing

### Request

`GET /api/product/id`

`http://localhost:5000/api/product/id`

## Create another new Thing

### Request

`POST /api/product`

`http://localhost:5000/api/product`
