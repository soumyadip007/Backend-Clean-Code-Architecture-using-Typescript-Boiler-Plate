import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import FooEntityGateway from 'src/core/common/foo/FooEntityGateway';
import Mapper from 'src/core/interface/Mapper';
import Foo from '../../core/common/foo/model/Foo';
import MongoCrudEntityGateway from '../base/MongoCrudEntityGateway';
import FooEntity from './entity/FooEntity';
import { FooDocument } from './FooDocument';
import FooDocumentMapper from './FooDocumentMapper';

@Injectable()
export default class MongoFooEntityGateway
  extends MongoCrudEntityGateway<Foo, FooDocument>
  implements FooEntityGateway {
  constructor(
    @InjectModel(FooEntity.name) model: Model<FooDocument>,
    @Inject(FooDocumentMapper.name) mapper: Mapper<Foo, FooDocument>,
  ) {
    super(model, mapper);
  }

  async findByAny(query: any) {
    return await this.model.find(query);
  }
  
  async findQuery(query: any) {
    return await this.model.find(query);
  }

  async findAndUpdateAny(query: any) {
    query = _.omitBy(query, _.isNil);
    const searchQuery = query.search;
    const updateQuery = query.update;
    const aggregateQuery = query.aggregate;
    let documents = await this.model.findOneAndUpdate(searchQuery, updateQuery, {
      new: true,
      runValidators: true,
    });
    if (documents) {
      documents = documents.toJSON();
    }
    return documents;
  }
}
