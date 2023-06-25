import mongoose from 'mongoose';
import turnsSchema from '../schema/turns.js';

const Turns = mongoose.model('Turns', turnsSchema);

export default Turns;
