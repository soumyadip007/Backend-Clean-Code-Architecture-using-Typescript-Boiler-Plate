import 'source-map-support/register';
import * as apm from 'elastic-apm-node';
import { NestFactory } from '@nestjs/core';
import { WebModule } from './web/WebModule';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import * as tracer from 'cls-rtracer';
import { v4 as uuidv4 } from 'uuid';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */

const bootstrap = async () => {
  const app = await NestFactory.create(WebModule);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'local') {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'local') {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  app.use(tracer.expressMiddleware({ useHeader: true, requestIdFactory: uuidv4 }));
  process.env.SRC_PATH = path.resolve(__dirname);
  const configService: ConfigService = app.get(ConfigService);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(configService.get<number>('PORT', 3000));
};
bootstrap();
