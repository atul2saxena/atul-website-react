const apiKey = 'FOBORKREYXPZN196';

const AlphaVantage = {

  search () {
    //console.log('test 3');
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=' + apiKey ,
    ).then(response => {
      console.log(response);
      if(response) {
        console.log(response);
        return response;
      }
    });
  }
};

export default AlphaVantage;
