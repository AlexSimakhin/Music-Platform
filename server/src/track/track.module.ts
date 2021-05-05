import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from 'src/track/schemas/track.schema';
import { Comment, CommentSchema } from 'src/track/schemas/comment.schema';
import { TrackController } from './track.controller';
import { trackService } from './track.service';

@Module({
  imports: [
  MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
  MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
  ],
  controllers: [TrackController],
  providers: [trackService],
})
export class TrackModule {
  
}