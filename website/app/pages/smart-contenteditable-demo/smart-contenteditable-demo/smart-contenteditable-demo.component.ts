import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-smart-contenteditable-demo',
	templateUrl: './smart-contenteditable-demo.component.html',
	styleUrls: ['./smart-contenteditable-demo.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartContenteditableDemoComponent implements OnInit {
	public formGroup = new FormGroup({
		frameworks: new FormControl(),
	});

	public suggestions = ['React', 'Vue', 'Angular'];

	ngOnInit() {}
}
