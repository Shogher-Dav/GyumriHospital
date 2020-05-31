import { IUser } from './IUser';

export interface IComment {
    id: number;
    text: string;
    image: string;
    user: IUser;
}
