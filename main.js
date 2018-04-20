var Coin = /** @class */ (function () {
    function Coin(coin) {
        this.id = coin.id;
        this.symbol = coin.symbol;
        this.price_thb = coin.price_thb;
    }
    Coin.prototype.print = function () {
        return "<button type=\"button\" class=\"btn btn-outline-dark\"> <a href=\"https://coinmarketcap.com/currencies/" + this.id + "/\"> " + this.symbol + "</a></button>  " + this.price_thb + " \u0E1A\u0E32\u0E17 ";
    };
    return Coin;
}());
function getcoins() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20").then(function (resp) {
        return resp.json();
    });
}
function addCoin(coin) {
    var $coins = $('#coins');
    $coins.append("  <li>" + coin.print() + "</li>  ");
}
function displayCoins(coins) {
    coins.forEach(function (coin) {
        addCoin(new Coin(coin));
    });
}
getcoins().then(function (coins) {
    displayCoins(coins);
});
