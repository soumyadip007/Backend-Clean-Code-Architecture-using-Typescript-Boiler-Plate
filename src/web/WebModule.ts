import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import FooController from './controller/FooController';
import CoreModule from './integration/CoreModule';
import HttpResponseInterceptor from './middleware/HttpResponseInterceptor';
import TimingInterceptor from './middleware/TimingInterceptor';

@Module({
  imports: [CoreModule],
  controllers: [
    FooController,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TimingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: HttpResponseInterceptor },
  ],
})
export class WebModule {}
