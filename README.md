# Petrol stations app
<br>
[See live demo](https://petrol-stations-app.vercel.app)
<br>

<img src="https://github.com/Cleverttech/petrol-stations-app/blob/main/public/demo.png" alt="demo-Image" margin="auto 0px" />

## Description

Search for petrol stations by street name.

<br>
## Components

- PetrolStationList

## Models

Station model

```javascript
{
  id: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  coordinates: { type: [Number], required: true },
}
```
<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         |
| ----------- | --------------------------- |
| GET         | `/stations`                 |
| GET         | `/api/petrol-stations/:id`  |
| POST        | `/stations`                 |
| PUT         | `/stations/:id`             |
| DELETE      | `/stations/:id`             |


## Possible Services

- Stations Service
  - stations.filter()
  - stations.detail(id)
  - stations.add(id)
  - stations.delete(id)
    
- External Libraries
  - Material UI

## Architecture:

• Frontend: React (JavaScript, Material UI)

• Backend: Node.js, Express
 
• DB: MongoDB, Mongoose

## Hosting:

• Frontend: vercel or AWS S3 Bucket

• Backend: Heroku or or An instance of AWS EC2

 





