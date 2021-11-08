# Interview Questions

## The core features of Node.js and Express and why they are useful.

NodeJs allows you to write javascript in environments other than the browser. This allows for programming various application layers in the same language. Express greatly simplifies HTTP interactions in a Node environment and allows for use of middleware to manipulate or perform logic related to HTTP responses and requests.

## Understand and explain the use of Middleware.

Middleware functions allow a developer to perform arbitrary operations on the HTTP request and response objects between the time the request is sent and when the response is received - in the middle of the HTTP transaction, eg: middleware.

## The basic principles of the REST architectural style.

- Client-Server Architecture – Separation of concerns
- Stateless – Client must authenticate with each resource request
- Cacheable – Both server and Client can cache resources
- Idempotent – Provides a uniform interface
- Layered – Components only have access to the layer they are interacting with
- Code on Demand – Code is deliverable and executable to the client

## Understand and explain the use of Express Routers.

Express is an open-source web application framework for Node.js that is the backbone of many Node servers such as MERN, the server stack that Lambda School teaches. Express Routers allow for simplified handling of routes in URLs and application of middleware to those routes.

## Describe tooling used to manually test the correctness of an API.

Manual tools such as Postman, Insomnia, or ThunderClient allow a user to make arbitrary requests to a URL and optionally include headers, request body, parameters, and environment variables. A developer can use these tools to create collections of requests associated with a given API to speed up testing and keep them uniform. I highly recommend creating a manual test for each resource request as the request is developed.
