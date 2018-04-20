declare var $: any;


class Coin {
    id : string
	symbol: string
	price_thb: number
	

	constructor(coin : {id:string,price_thb:number,symbol:string}) {
		this.id = coin.id
		this.symbol = coin.symbol
		this.price_thb = coin.price_thb

	}

	print(): string {
		return ` <a href="https://coinmarketcap.com/currencies/${this.id}/"> ${this.symbol}</a>  ${this.price_thb} บาท `

	}


}



function getcoins() {

	return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then(function (resp) {
		return resp.json();




	})
}



function addCoin(coin: Coin): void {
	const $coins = $('#coins')
	$coins.append(` <li>${coin.print()}</li> `

	)
}

function displayCoins(coins: Coin[]): void {
	coins.forEach(function (coin) {
		addCoin(new Coin(coin))



	})
}


getcoins().then((coins) => {
	displayCoins(coins)



})

