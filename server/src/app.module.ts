/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://AlexSimaAdmin:Admin12345@cluster0.c1avj.mongodb.net/musicPlatform?retryWrites=true&w=majority'),
    TrackModule
  ],
})

export class AppModule {}
