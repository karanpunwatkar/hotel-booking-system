// src/components/Floor.jsx

import Room from './Room';

function Floor({ floorNumber, rooms, onRoomClick }) {
  const floorRooms = rooms.filter((room) => room.floor === floorNumber);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Floor {floorNumber}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {floorRooms.map((room) => (
          <Room key={room.id} room={room} onClick={onRoomClick} />
        ))}
      </div>
    </div>
  );
}

export default Floor;
