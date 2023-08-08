## PROJECT SETUP

First of all, this project is using [MySQL](https://www.mysql.com/) as database management system.

After cloning the project, from root directory where `package.json` is, run `npm install` in order to install and setup the node_modules.

Duplcicate the `.env.example` file and rename it as `.env`. Make sure is on root directory.
Inside `.env` file insert the credentials of `MySQL` , username on `DB_USERNAME` and password on `DB_PASSWORD` (if there is no password leave it as it is).

Now we have to run some scripts to create the database, run the migrations and seeds to fill te database.

The comands are:

```
npm run dev:db:create
npm run dev:db:migrate
npm run dev:db:seed
```

Use `npm run dev` to keep running the project on your local environment.
