import { Exclude } from 'class-transformer';

export class UserSerialized {
    _id: string;
    email: string;
    name: string;
    roles: string[];

    @Exclude()
    password: string;

    constructor(partial: Partial<UserSerialized>) {
        Object.assign(this, partial);
    }
}