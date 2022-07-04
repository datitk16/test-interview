# Development Setup
#Tech stack
- [Angular 14](https://angular.io/)
- [json-server](https://github.com/typicode/json-server) & [faker.js](https://fakerjs.dev/guide/) mock a REST API BackEnd
- [Angular Material](https://material.angular.io/) UI component `tooltip` `modal` `table` and more.
- [ngrx](https://ngrx.io/) and [ngrx/component-store](https://ngrx.io/guide/component-store)
- [@ngneat/until-destroy](https://github.com/ngneat/until-destroy)

#Structure
```.
└── root
    ├── server - mock data
    │   
    └── test-interview
        └── environments - for set server Address
        
        └── app 
            ├── +state - for AppState
            │   
            ├── core (module)
            │   ├── component - for setup component golbal 
            │   └── models - for setup models golbal
            |   └── services - for setup services golbal
            ├── product (module)
            │   ├── +state - for ProductState
            │   ├── models
            |   ├── products (component)
            |   ├── table-top-bar (component) - for (search, filter by category)
            |   ├── services 
            │   └── product-modal (component) - setup modal for product
            │  
            └── shared (module) - for import any child module 
                ├── directives
                |    └── price-directive - for format price
                ├── constants 
                └── models ```


```
clone source code : ``` git clone https://github.com/datitk16/test-interview.git ```
- open terminal run command : ```json-server --watch ./server/data.json --port 3000 ``` (start server port 3000)
- open new terminal run : ```npm start ```( start angular project port 4200)

