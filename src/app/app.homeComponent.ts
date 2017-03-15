import {Component} from '@angular/core';
@Component({
	selector:'home',
	template:`<h2>Home Section</h2>
	<div class="row">
	 	<div *ngFor="let user of users">
			<div class="col-md-4"><a routerLink="/user/{{user.name}}/{{user.id}}">{{user.name}}</a></div>
	 	</div>
	 </div>
	`,
})
export class HomeComponent
{
	 users = [
	{ id: 1, name: "Noel"},
	{ id: 2, name: "Javed" },
	{ id: 3, name: "Salim" },
	{ id: 4, name: "Jose" },
	{ id: 5, name: "Rose" },
];
	
	constructor() {
		
	 }
	
}	