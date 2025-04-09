import { IMusic } from "./IMusic"

export interface IUser {
    name: string;
    username: string;
    email: string;
    password: string;
    birthDate: string;
    state: number;
    musics: IMusic[];
}
