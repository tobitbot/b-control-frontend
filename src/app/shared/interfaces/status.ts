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
    brightness: number;
    lamphours: number;
    maxlamphours: number
}

export interface ISingleStatus {
    result: string;
    range: string;
    value: number;
}
