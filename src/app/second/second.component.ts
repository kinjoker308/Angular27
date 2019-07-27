import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `
    <h2>Second Component Work!</h2>
    <h3>{{ name }}</h3>
    <h3 [ngStyle]="1==1 ? textRed : textYellow">{{ name }}</h3>
    <button (click)="ShowMe()">Click me!</button>
    `,
    styles: [
        `color: blue`
    ]
})
export class SecondComponent implements OnInit{
    name: string;
    textRed = {
        color: 'red',
        'font-weight': 'bold',
        // fontWeight: 'bold'
    }
    textYellow = {
        color: 'yellow',
        'font-weight': 'bold'
    }
    constructor(){
        this.name = 'KPT';
    }
    ngOnInit(){

    }
    /**
     * data cho hành động thì dùng dấu () -> button=(click)
     * data cho object thì dùng dấu []
     */
    //data binding -> format cho data
    //style binding ->> format cho CSS
    //class binding -> format cho CSS
    //event binding -> format cho su kien
    ShowMe(){
        alert('Hello')
    }
    //twoway binding
}