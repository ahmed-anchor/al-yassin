import { models, model, Schema } from "mongoose";

const project = Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const ProjectModel = models.project || model('project', project);

export default ProjectModel;