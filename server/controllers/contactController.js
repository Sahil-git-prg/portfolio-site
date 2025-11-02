import Contact from '../models/Contact.js';
// Create
export const createContact = async (req, res) => {
  try { const doc = await Contact.create(req.body); res.status(201).json(doc); }
  catch (e) { res.status(400).json({ error: e.message }); }
};
// Read all
export const getAllContacts = async (req, res) => {
  const docs = await Contact.find();
  res.json(docs);
};
// Read by id
export const getContactById = async (req, res) => {
  const doc = await Contact.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Contact not found' });
  res.json(doc);
};
// Update
export const updateContact = async (req, res) => {
  const doc = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doc) return res.status(404).json({ error: 'Contact not found' });
  res.json(doc);
};
// Delete by id
export const deleteContact = async (req, res) => {
  const doc = await Contact.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Contact not found' });
  res.json({ success: true });
};
// Delete all
export const deleteAllContacts = async (req, res) => {
  const result = await Contact.deleteMany();
  res.json({ deletedCount: result.deletedCount });
};
