export enum State {
    OFF,
    ON
}

export interface IStatus {
    power: State;
    autosource: State;
    source: string;
    blank: State;
    volume: number;
    lamphours: number;
    maxlamphours: number
}
