const express = require('express');
const {createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById} = require('../controllers/noteController');
const noteRouter = express.Router();


const { protect } = require('../middleware/authMiddleware');

noteRouter.post('/create', protect, createNote);
noteRouter.get('/readall', protect, getAllNotes);
noteRouter.get('/readone/:id', protect, getNoteById);
noteRouter.put('/update/:id', protect, updateNoteById);
noteRouter.delete('/delete/:id', protect, deleteNoteById);

module.exports = noteRouter;