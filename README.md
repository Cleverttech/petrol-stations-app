# Petrol stations app

<img src="https://github.com/Cleverttech/petrol-stations-app/blob/main/public/demo.png" alt="demo-Image" margin="auto 0px" />

## Description

Search for petrol stations by street name.

<br>
## Components

- PetrolStationList

## Models

User model

```javascript
{
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, default : String}
  role: {type: String}
  courses: {type: Schema.Types.ObjectId,ref:'Course'}
  portfolio: {type: Schema.Types.ObjectId,ref:'Portfolio'}
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

 





