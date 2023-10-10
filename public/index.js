async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main(
    // fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=3e9aa670752e4f5b9306ef2e023f1321')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => console.log(data))
    const { GME, MSFT, DIS, BNTX } = mockData;
const stocks = [GME, MSFT, DIS, BNTX];
console.log(chart)
)
