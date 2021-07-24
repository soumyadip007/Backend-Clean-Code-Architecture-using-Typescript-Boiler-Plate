import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import MongoFooEntityGateway from 'src/repository/foo/MongoFooEntityGatway';
import FooEntity from './foo/entity/FooEntity';
import FooDocumentMapper from './foo/FooDocumentMapper';
import FooSchema from './foo/fooSchema';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: FooEntity.name, schema: FooSchema }]),
  ],
  providers: [MongoFooEntityGateway, FooDocumentMapper],
  exports: [MongoFooEntityGateway],
})
export default class RepositoryModule {}
