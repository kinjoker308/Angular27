import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Hello</h1>
  // <h1>Hello</h1>
  // `,
  // styleUrls: ['./app.component.css']
  styles: [
    `
    h1{
      color:red
    }
    `,
    ``
  ]
})
export class AppComponent {
  title = 'Angular2705';
  name: String = 'Angular';
}

/**
 * B1: tạo component: ng g c name
 * B2: khai báo: 
 *          import ở app.module.ts
 *          thêm: FirstComponent vào declerations
 * B3: sử dụng
 * 
 * index.html -> root: AppComponent -> other cpn
 */