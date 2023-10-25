export enum State {
    OFF = "off",
    ON = "on"
}

export interface IPropery {
    description: string,
    value: number | string | State,
    param: string
}

export interface IStatus extends Array<IPropery> { }
