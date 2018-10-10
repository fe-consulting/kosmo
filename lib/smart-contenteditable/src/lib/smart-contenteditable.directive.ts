import {
	Directive,
	ElementRef,
	forwardRef,
	Input,
	OnDestroy,
	OnInit,
	Renderer2,
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TextArea } from './text-area';

export const CUSTOM_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => SmartContentEditableDirective),
	multi: true,
};

@Directive({
	selector: '[kSmartContentEditable]',
	providers: [CUSTOM_VALUE_ACCESSOR],
})
export class SmartContentEditableDirective
	implements OnInit, OnDestroy, ControlValueAccessor {
	private el: HTMLElement;
	private textArea: TextArea;
	private readonly subscriptions: Subscription[] = [];

	public onChange: (value: string) => void;
	public onTouched: () => void;

	@Input()
	private readonly suggestionAreaClassName = 'k--suggestion-area';

	@Input()
	private readonly suggestions: string[] = [];

	@Input()
	private readonly submitKeys = ['Enter', 'Tab'];

	@Input()
	private matchFn: (_: string) => (_: string) => boolean = (_: string) => {
		return (text: string) => {
			try {
				const regExp = new RegExp(`^${text}`, 'i');
				return Boolean(_.match(regExp));
			} catch {
				return false;
			}
		};
	};

	constructor(
		private readonly renderer: Renderer2,
		element: ElementRef<HTMLElement>
	) {
		this.el = element.nativeElement;
		this.textArea = new TextArea(this.el);
		this.el.contentEditable = 'true';
	}

	public ngOnInit() {
		this.subscribeToInputChange();
		this.subscribeToSubmitKeyPress();
	}

	public ngOnDestroy() {
		this.subscriptions.forEach(_ => _.unsubscribe());
	}

	public writeValue(value: any) {
		this.textArea.setHtml(value);
	}

	public registerOnChange(fn: any) {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any) {
		this.onTouched = fn;
	}

	public setDisabledState(disabled: boolean): void {
		const attr = 'disabled';

		if (disabled) {
			return this.renderer.setProperty(this.el, attr, attr);
		}

		this.renderer.removeAttribute(this.el, attr);
	}

	private subscribeToSubmitKeyPress() {
		const subscription = this.textArea.keyDowns$.subscribe(
			this.onSubmitKeyPressed
		);
		this.subscriptions.push(subscription);
	}

	private subscribeToInputChange(): void {
		const subscription = this.textArea.inputs$.subscribe(this.onAreaChange);
		this.subscriptions.push(subscription);
	}

	private onSubmitKeyPressed = (e: KeyboardEvent) => {
		const isSubmitKey = this.submitKeys.includes(e.key);
		const shouldAddToken = isSubmitKey && this.isSuggestionAreaVisible();

		if (shouldAddToken) {
			this.insertMatchingToken();
		}
	};

	private insertMatchingToken = () => {
		this.removeSuggestionElement();

		const token = this.textArea.getTextAtCursorPosition();
		const text = token ? token.text : undefined;
		const matchingToken = token ? this.getSuggestionToken(text) : undefined;

		if (!token || !matchingToken) {
			return;
		}

		const value = this.textArea.value.trim();
		const left = value.substring(0, token.leftIndex).trim();
		const right = value.substring(token.rightIndex, value.length).trim();

		setTimeout(() => {
			const result =
				left + ' ' + matchingToken.token.toLowerCase() + ' ' + right;
			const cursorIndex =
				token.leftIndex + matchingToken.token.length + 2;

			this.textArea.setText(result + ' ');
			this.textArea.setCaretPosition(cursorIndex);

			this.onChange(this.textArea.value);
		}, 0);
	};

	private onAreaChange = (e: KeyboardEvent & { data: string }) => {
		this.removeSuggestionElement();
		this.onChange(this.textArea.value);

		if (!e.data) {
			return;
		}

		const matchingToken = this.findMatch();

		return matchingToken
			? this.showSuggestion(matchingToken.completion)
			: this.removeSuggestionElement();
	};

	private findMatch() {
		const MIN_TOKEN_LENGTH = 3;
		const token = this.textArea.getTextAtCursorPosition();

		if (token && token.text.length >= MIN_TOKEN_LENGTH) {
			return this.getSuggestionToken(token.text);
		}
	}

	private getSuggestionToken(text = '') {
		const target = text.toLowerCase().trim();
		const token = this.suggestions.find(_ => this.matchFn(_)(target));

		if (!token) {
			return;
		}

		let completion = '';
		let n = 0;

		while (n < token.length) {
			if (target[n] !== token.toLowerCase()[n]) {
				completion += token[n];
			}

			n++;
		}

		return completion ? { completion, token } : undefined;
	}

	private removeSuggestionElement() {
		const el = this.findSuggestionElement();
		return el && el.remove();
	}

	private isSuggestionAreaVisible(): boolean {
		return Boolean(this.findSuggestionElement());
	}

	private showSuggestion(suggestion: string) {
		this.renderer.setProperty(
			this.getSuggestionElement(),
			'innerText',
			suggestion.toLowerCase()
		);
	}

	private getSuggestionElement(): HTMLElement {
		return this.findSuggestionElement() || this.createSuggestionElement();
	}

	private findSuggestionElement(): HTMLElement {
		const parent = this.el.parentElement as HTMLElement;
		return parent.querySelector(
			'.' + this.suggestionAreaClassName
		) as HTMLElement;
	}

	private createSuggestionElement(): HTMLElement {
		const element = `<span class="${this.suggestionAreaClassName}"></span>`;
		const value = this.textArea.value;
		const index = this.textArea.getCaretPosition();
		const left = value.substring(0, index);
		const right = value.substring(index + 1, value.length);
		const html = `${left} ${element} ${right}`;

		this.textArea.setHtml(html);
		this.textArea.setCaretPosition(left.length);

		return this.getSuggestionElement();
	}
}
