import { Directive } from '@angular/core';
import { Tab } from '@kosmo/core';

@Directive({
	selector: 'k-tab, [kTab]',
})
export class TabDirective extends Tab {}
