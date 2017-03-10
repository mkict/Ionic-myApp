//test.ts
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
	templateUrl: 'test.html'
})

export class TestPage{
	//Attr
	items: Array<{title: string, value: any}>;
	constructor(public navCtrol: NavController, public navParams: NavParams){
		this.items = [];
		for(let i = 1; i < 11; i++){
			(this.items).push({
				title: 'Item' + i,
				value: i
			});
		}
	}
}