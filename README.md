
# Currency Exchange Calculator

It is Currency Exchange Calculator build in pure js ,html and css which  takes input from user through select element and input .With those data  it fatch related data from api and calculates the valus and display.




## API Reference

#### Get all currencies with their code

```http
  GET https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies.json
```
For Example
```
{
    "aed": "United Arab Emirates Dirham",
    "afn": "Afghan afghani",
    "all": "Albanian lek",
    "amd": "Armenian dram",
    "ang": "Netherlands Antillean Guilder",
    .....
}
```


#### Get Latest Exchange Rate

```http
  GET https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/npr.json
```

For Example:
```
{
    "date": "2021-06-13",
    "npr": 117.0082
}
```




  
## Demo

https://prolaxu.github.io/currency-exchange-calculator/

  
## Screenshots

![App Screenshot](img/sh.png)

  
## Authors

- [@prolaxu](https://github.com/prolaxu)

  
