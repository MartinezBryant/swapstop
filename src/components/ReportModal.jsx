import React, { useState } from 'react';

function ReportModal({ user, onClose }) {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    alert(`Reported ${user.name} for: ${reason}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h4>Report {user.name}</h4>
        <textarea 
          value={reason} 
          onChange={(e) => setReason(e.target.value)} 
          placeholder="Enter reason..." 
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ReportModal;
