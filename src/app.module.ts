import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://danna:danna123@framework.1t1kk.mongodb.net/test'),
        UsersModule,
        AuthModule
    ]
})
export class AppModule { }
