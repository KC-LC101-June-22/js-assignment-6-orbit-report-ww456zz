import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	arr: string[] = [];
	count:number = 0;
  constructor() { }
	
  ngOnInit() {
  }

 loopArr () {
	for (let i =0; i < this.satellites.length; i++) {
		if (!this.arr.includes(this.satellites[i].type)) {
			this.arr.push(this.satellites[i].type);
		}
	}
	return this.arr;
  }

  countByType(type: string): number {

	if (this.satellites) {
	 for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type == type) {
			this.count++;
		 }
	  }
	}

	if (this.arr[this.arr.length-1] == type) {
		let ans = this.count;
		this.count = 0;
		return ans;
	} else {
		return;
	}
}



}
