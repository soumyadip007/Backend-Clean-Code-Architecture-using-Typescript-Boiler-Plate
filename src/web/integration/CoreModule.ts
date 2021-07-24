import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import RequestContext from 'src/core/context/RequestContext';
import RepositoryModule from '../../repository/RepositoryModule';
import Configuration from './Configuration';
import NestJsContext from './NestJsContext';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */

const requestContext = new RequestContext();
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(
      process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV
        ? {
            envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
          }
        : {},
    ),
    RepositoryModule,
  ],
  controllers: [],
  providers: [
    Configuration,
    NestJsContext,
    { provide: RequestContext, useValue: requestContext },
  ],
  exports: [NestJsContext],
})
export default class CoreModule {}
