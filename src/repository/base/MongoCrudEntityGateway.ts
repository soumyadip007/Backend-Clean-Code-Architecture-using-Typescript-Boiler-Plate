import { Document, Model } from 'mongoose';
import CrudOperations from 'src/core/base/CrudOperations';
import Mapper from 'src/core/interface/Mapper';
import KeyValue from '../../core/base/KeyValue';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class MongoCrudEntityGateway<M, D extends Document> implements CrudOperations<M> {
  constructor(protected model: Model<D>, protected mapper: Mapper<M, D>) {}
  async save(coreModel: M) {
    const document = await this.mapper.to(coreModel);
    const savedDocument = await document.save();
    return await this.mapper.from(savedDocument);
  }

  async saveAll(coreModels: M[]) {
    const documents = await this.mapper.toArray(coreModels);
    const savedDocuments = await this.model.insertMany(documents);
    return this.mapper.fromArray(savedDocuments);
  }

  async find(searchCriteria: KeyValue<any>) {
    const query: any = searchCriteria.toObject();
    const documents = await this.model.find(query);
    return this.mapper.fromArray(documents);
  }

  async findAll() {
    const documents = await this.model.find();
    return this.mapper.fromArray(documents);
  }

  async exists(searchCriteria: KeyValue<any>) {
    const query: any = searchCriteria.toObject();
    return await this.model.exists(query);
  }

  async count(searchCriteria: KeyValue<any>) {
    const query: any = searchCriteria.toObject();
    return await this.model.count(query);
  }

  async replace(searchCriteria: KeyValue<any>, coreModel: M) {
    const filterQuery: any = searchCriteria.toObject();
    const savedDocument = await this.model.replaceOne(filterQuery, coreModel);
    return await this.mapper.from(savedDocument);
  }

  async delete(searchCriteria: KeyValue<any>) {
    const query: any = searchCriteria.toObject();
    const result = await this.model.deleteMany(query);
    return result.deletedCount;
  }

  async patch(searchCriteria: KeyValue<any>, patches: Array<KeyValue<any>>) {
    const updateQuery = patches.reduce<any>(
      (processedPatches, currentPatch) => ({
        ...processedPatches,
        ...currentPatch.toObject(),
      }),
      {},
    );

    await this.model.findOneAndUpdate(searchCriteria.toObject(), updateQuery);
    return true;
  }
}
