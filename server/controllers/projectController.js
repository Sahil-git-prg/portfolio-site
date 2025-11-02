import Project from '../models/Project.js';
// Create
export const createProject = async (req, res) => {
  try { const doc = await Project.create(req.body); res.status(201).json(doc); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
// Read all
export const getAllProjects = async (req, res) => {
  const docs = await Project.find();
  res.json(docs);
};
// Read by id
export const getProjectById = async (req, res) => {
  const doc = await Project.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Project not found' });
  res.json(doc);
};
// Update
export const updateProject = async (req, res) => {
  const doc = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ error: 'Project not found' });
  res.json(doc);
};
// Delete by id
export const deleteProject = async (req, res) => {
  const doc = await Project.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Project not found' });
  res.json({ success: true });
};
// Delete all
export const deleteAllProjects = async (req, res) => {
  const result = await Project.deleteMany();
  res.json({ deletedCount: result.deletedCount });
};
