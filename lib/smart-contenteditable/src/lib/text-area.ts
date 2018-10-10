import { fromEvent, Observable } from 'rxjs';

const KEYDOWN_EVENT = 'keydown';
const INPUT_EVENT = 'input';

export class TextArea {
	public keyDowns$: Observable<Event>;
	public inputs$: Observable<Event>;

	constructor(private readonly el: HTMLElement) {
		this.keyDowns$ = fromEvent(this.el, KEYDOWN_EVENT);
		this.inputs$ = fromEvent(this.el, INPUT_EVENT);
	}

	public get value(): string {
		return this.el.innerText || '';
	}

	public setHtml(html: string) {
		this.el.innerHTML = html;
	}

	public setText(text: string) {
		this.el.innerText = text;
	}

	public getTextAtCursorPosition() {
		const EMPTY = ' ';
		const value = this.value.trim();
		const index = this.getCaretPosition();

		if (value.length === 0) {
			return;
		}

		let left = '';
		let right = '';
		let leftIndex = index - 1;
		let rightIndex = index;

		while (leftIndex >= 0 && value[leftIndex] !== EMPTY) {
			if (value[leftIndex]) {
				left += value[leftIndex];
			}
			leftIndex--;
		}

		while (rightIndex < value.length && value[rightIndex] !== EMPTY) {
			if (value[rightIndex]) {
				right += value[rightIndex];
			}
			rightIndex++;
		}

		const text =
			left
				.split('')
				.reverse()
				.join('') +
			' ' +
			right;

		return { text, leftIndex, rightIndex };
	}

	public getCaretPosition(): number {
		const range = window.getSelection().getRangeAt(0);
		const preCaretRange = range.cloneRange();

		preCaretRange.selectNodeContents(this.el);
		preCaretRange.setEnd(range.endContainer, range.endOffset);

		return preCaretRange.endOffset;
	}

	public setCaretPosition(index: number) {
		const range = document.createRange();
		const sel = window.getSelection();
		const target = this.el;
		const newText = document.createTextNode('');

		target.appendChild(newText);
		range.setStart(target.childNodes[0], index);

		range.collapse(false);
		sel.removeAllRanges();
		sel.addRange(range);
		target.focus();
	}
}
