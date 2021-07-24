import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import IConfiguration from 'src/core/base/IConfiguration';
import Logger from 'src/core/base/Logger';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


@Injectable()
export default class Configuration implements IConfiguration {
  databaseUrl: string;

  constructor(configService: ConfigService) {
    this.databaseUrl = configService.get<string>('DATABASE_URL');
  }
}
