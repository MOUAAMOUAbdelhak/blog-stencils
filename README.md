# blog-stencils

## API
The REST API is located here [https://polymer-101-workshop.cleverapps.io/api/blogpost](https://polymer-101-workshop.cleverapps.io/api/blogpost) (unavailable outside workshop event, check the source code if you need it).  
The API exposes the folowing ressources: 
```
GET    /api/blogpost 
POST   /api/blogpost
PUT    /api/blogpost/:id 
GET    /api/blogpost/:id
DELETE /api/blogpost/:id 
GET    /api/blogpost/autor/:name 
GET    /api/blogpost/:blogId/comment 
POST   /api/blogpost/:blogId/comment 
GET    /api/blogpost/:blogId/comment/:id 
``` 
## Objectives 
The objectives is to build a SPA Blog.  
It should have the following features : 
- a front page that list all article but limit the content to the first 140 characters
- a page to add new article (or blog post)
- we should be able to view the details of an article in a separate page  

Bonus point : be able to edit / delete an article
