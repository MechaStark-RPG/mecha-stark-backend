import mongoose from 'mongoose';

const actionSchema = new mongoose.Schema({
  mecha_id: { type: Number, required: true },
  first_action: { type: String, required: true }, // Aquí debes elegir el tipo de datos adecuado para TypeAction
  movement: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  attack: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
});

const turnSchema = new mongoose.Schema({
  game_id: { type: Number, required: true },
  player: { type: String, required: true },
  actions: [actionSchema],
});


export default turnSchema;
