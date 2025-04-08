// src/components/Room.jsx

import './Room.css';

function Room({ room, onClick }) {
  return (
    <div
      className={`room ${room.booked ? 'booked' : ''}`}
      onClick={() => onClick(room.id)}
    >
      {room.id}
    </div>
  );
}

export default Room;
