import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NEVER, Observable, Subject, timer } from 'rxjs';
import { map, share, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';

const K = 1000;
const toMinutesDisplay = (ms: number) => Math.floor(ms / K / 60);
const toSecondsDisplay = (ms: number) => Math.floor(ms / K) % 60;

@Component({
    selector: 'k-progress-timer',
    templateUrl: `./progress-timer.component.html`,
    styleUrls: ['./progress-timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressTimerComponent implements OnInit {
    private toggle$ = new Subject();
    private current: number;
    private running: boolean;
    private timer$: Observable<number>;

    @Input() public time: number;
    @Input() public interval = 1000;
    @Input() public run = true;
    @Input() public displayTime = true;

    @Output() public complete: EventEmitter<void> = new EventEmitter();

    public percent$: Observable<number>;
    public minutes$: Observable<string>;
    public seconds$: Observable<string>;

    public ngOnInit() {
        this.current = this.time;
        this.createTimer(this.time, this.run);
    }

    public createTimer(time: number, run: boolean) {
        const currentSeconds = () => time / this.interval;
        const toMs = (t: number) => t * this.interval;
        const toPercent = (t: number) => (t / (this.time / this.interval)) * 100;
        const toSeconds = (t: number) => currentSeconds() - t;

        this.timer$ = timer(0, this.interval).pipe(
            tap((s) => this.current = time - (s * K)),
            map(toSeconds),
            takeWhile(t => t >= 0),
            share()
        );

        const time$ = this.toggle$.pipe(
            startWith(run),
            tap(running => this.running = running),
            switchMap((running: boolean) => (running ? this.timer$ : NEVER)),
            share()
        );

        const ms$ = time$.pipe(map(toMs), share());
        this.percent$ = time$.pipe(map(toPercent), startWith(toPercent(time / K)));

        this.minutes$ = ms$.pipe(
            map(toMinutesDisplay),
            map(s => s.toString()),
            startWith(toMinutesDisplay(time)),
        );

        this.seconds$ = ms$.pipe(
            map(toSecondsDisplay),
            map(s => s < 10 ? `0${s}` : s.toString()),
            startWith(toSecondsDisplay(time))
        );

        time$.subscribe({complete: () => this.complete.emit()});
    }

    public start() {
        this.toggle$.next(true);
    }

    public reset() {
        this.current = this.time;
        this.createTimer(this.time, true);
    }

    public resume() {
        if (this.running) {
            return;
        }

        this.createTimer(this.current, true);
        this.toggle$.next(true);
    }

    public pause() {
        this.toggle$.next(false);
    }
}
