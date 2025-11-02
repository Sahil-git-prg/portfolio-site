import Qualification from '../models/Qualification.js';
// Create
export const createQualification = async (req, res) => {
  try { const doc = await Qualification.create(req.body); res.status(201).json(doc); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
// Read all
export const getAllQualifications = async (req, res) => {
  const docs = await Qualification.find();
  res.json(docs);
};
// Read by id
export const getQualificationById = async (req, res) => {
  const doc = await Qualification.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Qualification not found' });
  res.json(doc);
};
// Update
export const updateQualification = async (req, res) => {
  const doc = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ error: 'Qualification not found' });
  res.json(doc);
};
// Delete by id
export const deleteQualification = async (req, res) => {
  const doc = await Qualification.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Qualification not found' });
  res.json({ success: true });
};
// Delete all
export const deleteAllQualifications = async (req, res) => {
  const result = await Qualification.deleteMany();
  res.json({ deletedCount: result.deletedCount });
};
