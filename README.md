# Node.js-Express-boilerplate

A boilerplate for building production-ready RESTful APIs using Node.js, Express, Typescript, and PostgreSQL

# Architecture

```text
├─ test               // All the testing code in it
├─ dist               // Build version
├─ src
│  ├─ config
│  ├─ controllers
│  ├─ middlewares
│  ├─ routes
│  ├─ db
│  │  ├─ dal          // The data access layer (DAL) is where we implement our SQL queries
│  │  ├─ models       // Sequelize models
│  ├─ services
│  ├─ utils
```

# Build
1 - Install package
```
npm install
```

2 - Build project 
```
npm run build
```

# Development
1- Install package
```
npm install
```

2- Run project 
```
npm run dev
``` 