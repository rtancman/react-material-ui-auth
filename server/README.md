# JSONServer + JWT Auth

A Fake REST API using json-server with JWT authentication. You can find the [complete tutorial here](https://www.techiediaries.com/fake-api-jwt-json-server/)

## Install

```bash
$ yarn install
$ yarn start-auth
```

## How to login?

You can login by sending a POST request to

```
POST http://localhost:8080/auth/signin
```
with the following data 

```
{
  "email": "lala@email.com",
  "password":"lala1234"
}
```

You should receive an access token with the following format 

```
{
  "access_token": "<ACCESS_TOKEN>"
}
```

```
POST http://localhost:8080/auth/signup
```
with the following data 

```
{
  "email": "lulu@email.com",
  "password": "lulu1234",
  "name": "lulu"
}
```

response
```
{
    "email": "lulu@email.com",
    "name": "lulu",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbHNvbmFhYWFAZW1haWwuY29tIiwicGFzc3dvcmQiOiJuaWxzb24iLCJpYXQiOjE1NDM3MDMyNTYsImV4cCI6MTU0MzcwNjg1Nn0.Y4cUXuMkwDD7ZnMLTYiHY45vvr7ezEbbXOKy3pZ_Nms"
}
```


