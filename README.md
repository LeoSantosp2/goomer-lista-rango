# Goomer Lista Rango

## About
This project, is a `Goomer challenge developer backend`. I finded this project in a repository on GitHub. The link of repository and challenge below:

- [Challengers Repository](https://github.com/CollabCodeTech/backend-challenges?tab=readme-ov-file)
- [Goomer Repository](https://github.com/goomerdev/job-dev-backend-interview)

## Challanges and Improvements

### Challenges
This challenge was of medium difficulty. When it came to creating the routes and how they would work, I had to think a bit more. For the tests with `Jest`, I had to do some research because I don't have much knowledge of this library yet, and for the `MySQL` queries, I also had to do some research because I only have basic knowledge of `MySQL`.

### Improvements
I know that for the SQL queries, something more manual was requested to test the knowledge of the person doing the challenge, but an improvement I could make would be to add an `ORM` to facilitate the queries.

## Features
- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)
- [Database MySql](https://www.mysql.com/)

## Requiments
- NodeJS 18.20.3 LTS or hight
- Feature of the http requests
  - Example:
    - [Insomnia](https://insomnia.rest/download)
    - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) Extension of the [Visual Studio Code](https://code.visualstudio.com/)
- MySQL Database

## Get Started

1. Clone this repository

```bash
git clone https://github.com/LeoSantosp2/goomer-lista-rango.git
```

2. Download the packages

```bash
npm install
```

Or

```bash
yarn add
```

3. Create file with name `.env` and, insert the variables below:

```bash
DATABASE=database_name
DATABASE_HOST=database_host
DATABASE_PORT=database_port
DATABASE_USERNAME=database_username
DATABASE_PASSWORD=database_password
```

Adapt the variables with the your informations.

4. Initiate the server
```bash
npm run dev
```

Or

```bash
yarn dev
```

## API Usage

## Restaurants Route
Route: `http://localhost:3000/restaurants`

With this route, you can `CRUD` the restaurants

### Examples

### List all restaurants:
- GET `http://localhost:3000/restaurants`

### List a restaurant:
- GET `http://localhost:3000/restaurants/restaurant_id`

### Register a new restaurant:
- POST `http://localhost:3000/restaurants`

In the body, go to the fields below:

```json
{
  "restaurantName": "",
  "restaurantAddress": "",
  "openingHours": "",
  "restaurantPhoto": ""
}
```

### Update datas of the restaurant:
- PUT `http://localhost:3000/restaurants/restaurant_id`

In the body, go to the fields below:

```json
{
  "restaurantName": "",
  "restaurantAddress": "",
  "openingHours": "",
  "restaurantPhoto": ""
}
```

### Delete a restaurant:
- DELETE `http://localhost:3000/restaurants/restaurant_id`

## Products Route
Route: `http://localhost:3000/products`

With this route, you can `CRUD` the products

### Examples

### List all products of the restaurant:
- GET `http://localhost:3000/products?restaurant_id=restaurant_id`

### List a product of the restaurant:
- GET `http://localhost:3000/products/restaurant_id?product_id=product_id`

### Register a product of the restaurant:
- POST `http://localhost:3000/products/restaurant_id`

In the body, go to the fields below:

```json
{
  "productName": "",
  "productPrice": ,
  "productCategory": "",
  "productPhoto": ""
}
```

### Update datas of the product:
- PUT `http://localhost:3000/products/product_id`

In the body, go to the fields below:

```json
{
  "productName": "",
  "productPrice": ,
  "productCategory": "",
  "productPhoto": ""
}
```

### Delete a product of the restaurant:
- DELETE `http://localhost:3000/products/product_id`

## Discounts Route
Route: `http://localhost:3000/discounts`

With this route, you can `Create`, `Update` and `Delete` the discounts

### Examples

### Create a discount:
- POST `http://localhost:3000/discounts/product_id`

In the body, go to the fields below:

```json
{
  "discountDescription": "",
  "discountPercent": ,
  "weekDays": "",
  "startHour": "",
  "endHour": ""
}
```

### Updata a discount:
- PUT `http://localhost:3000/discounts/discounts_id?product_id=product_id`

In the body, go to the fields below:

```json
{
  "discountDescription": "",
  "discountPercent": ,
  "weekDays": "",
  "startHour": "",
  "endHour": ""
}
```

### Delete a discount:
- DELETE `http://localhost:3000/discounts/discount_id`

## Change the Production

1. Build the project:
```bash
npm run build
```

Or

```bash
yarn build
```

2. Copy and past the files .sql for the folder dist > database > migrations

3. Run the command:
```bash
npm start
```

Or

```bash
yarn start
```