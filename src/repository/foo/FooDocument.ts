import FooEntity from './entity/FooEntity';
import { Document } from 'mongoose';

export type FooDocument = FooEntity & Document;
