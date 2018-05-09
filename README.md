# docker-ized postgres node fullstack

- SERVER  
[docker-compose] is used to link two [docker] containers:
  - an [Express] container serving a REST api
  - a Postgres database container, from the [official image](https://hub.docker.com/_/postgres/) 
- CLIENT  
A React app, initialized with [create-react-app]

## Install
Requires system installations of [docker], [docker-compose], and Node. 
Install the node packages with: 
```
npm install
```

## Run
Uses [concurrently] to start the api SERVER and the react CLIENT. 
```
npm start
```

#### About the Postgres container
The db files are persisted on the host and mapped to the container 
in the `docker-compose.yml` with:
```
volumes:
  - "/tmp/pgdata:/var/lib/postgresql/data"

```


Connecting to the db running in its container, examples:  
  - Connect from an app with: 
```
postgres://myapp_user:password@db/myapp_db
```
  - Or with a connection object: 
```
connection: {
  host: process.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'postgres'
}
```
  - Or with `psql` from host:  
```
psql postgres://myapp_user:password@localhost:15432/myapp_db
```


#### Sources
I was helped putting this together from stuff I found 
[here](https://docs.docker.com/engine/examples/postgresql_service/), 
[here](https://medium.com/@beld_pro/quick-tip-creating-a-postgresql-container-with-default-user-and-password-8bb2adb82342), 
[here](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0), 
[here](http://tleyden.github.io/blog/2017/06/14/running-postgresql-in-docker/), 
and [here](https://stackoverflow.com/questions/48751074/setting-up-docker-with-knex-js-and-postgresql).



[Express]: http://expressjs.com
[create-react-app]: https://github.com/facebook/create-react-app
[concurrently]: https://www.npmjs.com/package/concurrently
[docker-compose]: https://github.com/docker/compose
[docker]: https://www.docker.com/what-docker
