
## libgen-search

Library to scrape and return book details from libgen



## Installation

Installation with Npm :

```bash
  npm i libgen-search
```
    
## Demo

```javascript
    const gen = require('libgen-search');
    
    gen("title name").then(function(books){
        console.log(books);
    }).catch(function(error){
        throw error;
    })
``` 


## Badges

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

