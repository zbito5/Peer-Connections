const express = require('express');
const router = express.Router();
const GroupChat = require('./models/GroupChat'); // Adjust the path according to your project structure

// POST endpoint to create a group chat
router.post('/create-group-chat', async (req, res) => {
  const { name, userIds } = req.body; // Assume userIds is an array of user IDs

  try {
    // Create a new group chat
    const groupChat = new GroupChat({
      name: name,
      users: userIds,
    });

    // Save the group chat to the database
    await groupChat.save();

    res.status(201).json(groupChat);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create group chat', error: error });
  }
});

module.exports = router;
