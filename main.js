fetch('https://www.freeforexapi.com/api/live?pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR').then(response => {
    return response.json();
}).then(data => {
    const rateData = data.rates;

    //console.group(rateData);

    document.getElementById('EURUSD').innerHTML = rateData.EURUSD.rate;
    document.getElementById('EURGBP').innerHTML = rateData.EURGBP.rate;
    document.getElementById('GBPUSD').innerHTML = rateData.GBPUSD.rate;
    document.getElementById('USDJPY').innerHTML = rateData.USDJPY.rate;
    document.getElementById('AUDUSD').innerHTML = rateData.AUDUSD.rate;
    document.getElementById('USDCHF').innerHTML = rateData.USDCHF.rate;
    document.getElementById('NZDUSD').innerHTML = rateData.NZDUSD.rate;
    document.getElementById('USDCAD').innerHTML = rateData.USDCAD.rate;
    document.getElementById('USDZAR').innerHTML = rateData.USDZAR.rate;
    
})