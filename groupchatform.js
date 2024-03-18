import React, { useState } from 'react';
import axios from 'axios';

const GroupChatForm = () => {
  const [chatName, setChatName] = useState('');
  const [userIds, setUserIds] = useState([]); // In a real app, you'd fetch these or have a user picker

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/create-group-chat', {
        name: chatName,
        userIds: userIds,
      });
      console.log('Group chat created:', response.data);
      // Reset form or redirect user
    } catch (error) {
      console.error('Error creating group chat:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chatName">Chat Name:</label>
      <input
        type="text"
        id="chatName"
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
      />
      {/* Implement user ID input or selection mechanism */}
      <button type="submit">Create Group Chat</button>
    </form>
  );
};

export default GroupChatForm;
