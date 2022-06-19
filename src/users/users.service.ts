import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new this.userModel(createUserDto);
        return user.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true });
    }

    async remove(id: string): Promise<any> {
        return await this.userModel.deleteOne(
            { _id: id }
        ).exec();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email });
    }
}