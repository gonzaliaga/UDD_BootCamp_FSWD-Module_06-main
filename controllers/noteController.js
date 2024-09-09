const Note = require('../models/noteModel');

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newNote = await Note.create({ title, content });
    //user: req.user._id,

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json({ notes });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findNoteById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    } else {
      res.status(200).json(note);
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
};

exports.updateNoteById = async (req, res) => {
  //const { title, content } = req.body;

  try {
    const note = await Note.findNoteByIdandUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(400).json({
        message: 'Note not found',
        error: error.message
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
    error: error.message
    });
  }
};

exports.deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdandDelete(req.params.id);
    if (note) {
      res.status(200).json({
        message: 'Note Borrada',
      error: error.message
      });
    } else {
      res.status(404).json({ message: 'Nota no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al borrar el producto' });
  }
};