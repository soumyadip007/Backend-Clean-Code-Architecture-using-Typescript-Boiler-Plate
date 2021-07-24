import { SchemaFactory } from '@nestjs/mongoose';
import FooEntity from './entity/FooEntity';
const FooSchema = SchemaFactory.createForClass(FooEntity);

FooSchema.index({
    fooId: 1,
});
export default FooSchema;
