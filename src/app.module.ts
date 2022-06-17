import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@dbteste.thkyo.mongodb.net/testNest?retryWrites=true&w=majority'), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
