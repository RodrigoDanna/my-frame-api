import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByName(username);

        if (user) {
            const isMatch = bcrypt.compare(pass, user.password);

            if (isMatch) {
                const fields = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                return fields;
            }
        }
        return 'Username or password invalid!';
    }
}