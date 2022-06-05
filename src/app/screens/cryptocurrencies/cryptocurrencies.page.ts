import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Data {
  ticker: {
      high: number;
      low: number;
      vol: number;
      last: number;
      buy: number;
      sell: number;
      date: number;
  };
}

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.page.html',
  styleUrls: ['./cryptocurrencies.page.scss'],
})
export class CryptocurrenciesPage implements OnInit {

  bitcoin: Data = null;
  ethereum: Data = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBTC();
    this.getETH();
  }

  getBTC() {
    this.http.get<Data>('https://www.mercadobitcoin.net/api/BTC/ticker/').subscribe((response) => {
      this.bitcoin = response;
    });
  }

  getETH() {
    this.http.get<Data>('https://www.mercadobitcoin.net/api/ETH/ticker/').subscribe((response) => {
      this.ethereum = response;
    });
  }

}
