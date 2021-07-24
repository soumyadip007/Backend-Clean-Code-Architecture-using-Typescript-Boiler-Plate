import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: 'foo', timestamps: true })
export default class FooEntity {
  @Prop({ required: true, unique: true })  fooId?: string;
  @Prop() fooName: string;
}
