1. What does server.js do?
	It's responsible of handle requests that comes from react app using express framework, it will well use /api/artwork as end point and match it with existing route file
2. What does a route file do?
	the route file will see the method and path and take it to the responsible controller 
3. What does a controller do?
	it will handle req , extract data from user, body, param, hashing password, save to db, and then send a response, even if fail it will also send a response, it use async and try catch blocks
4. What does a model do?
	model contain our database schemas and can share across the app using express module
5. Trace GET /api/artworks/:id through the existing files.
   first it will come as req to server.js then it will match /api/artworks -> go to artworkRoutes -> see /:id -> match with getArtWorkById controller -> qurey to the artwork model-> send json to react-> display
6. Why shouldn’t database-query logic normally be placed directly in server.js?
	so we don't want a messy code, we want a structural functional files