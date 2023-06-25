import turnsModel from '../models/turnsModel.js';

const turnsController = {
  getAll: async (request, response, _) => {
    turnsModel.find({}, (error, users) => {
      if (error) {
        return response.json(error);
      }

      response.json(users);
    });
  },

  getOne: (request, response, _) => {
    turnsModel.findById(request.params.id, (error, user) => {
      if (error) {
        return response.json(error);
      }

      response.json(user || {});
    });
  },

  create: (request, response, _) => {
    turnsModel.create(request.body, (error, user) => {
      if (error) {
        return response.json(error);
      }

      response.json(user);
    });
  },
};

export default turnsController;
