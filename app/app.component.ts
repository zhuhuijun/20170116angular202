/**
 * Created by Administrator on 2017/1/16.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>我喜欢的网站: {{mySite}}</h2>
    `
})
export class AppComponent {
    title = '站点列表';
    mySite = '菜鸟教程';
}
