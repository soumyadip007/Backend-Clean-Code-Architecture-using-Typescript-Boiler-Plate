import Mapper from 'src/core/interface/Mapper';
import Foo from '../../core/common/foo/model/Foo';
import { FooDocument } from './FooDocument';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import FooEntity from './entity/FooEntity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class FooDocumentMapper extends Mapper<Foo, FooDocument> {
  constructor(@InjectModel(FooEntity.name) private model: Model<FooDocument>) {
    super();
  }

  async to(coreModel: Foo): Promise<FooDocument> {
    return await this.model.create({ ...coreModel });
  }

  async from(dto: FooDocument): Promise<Foo> {
    return { ...dto['_doc'] };
  }
}
