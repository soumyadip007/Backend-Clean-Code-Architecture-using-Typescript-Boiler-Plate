import { Controller, Get, Inject } from '@nestjs/common';
import FooService from 'src/core/common/foo/FooService';
import Context from 'src/core/context/Context';

@Controller('/')
export default class FooController {
  service: FooService;

  constructor(@Inject('Core') core: Context) {
   
    this.service = core.foo.fooService;
  
  }

  @Get('/foo')
  async check() {
    return await { name : "Soumyadip"};
  }
}
