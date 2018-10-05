import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox-demo',
    templateUrl: './checkbox-demo.component.html',
    styleUrls: ['./checkbox-demo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxDemoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
