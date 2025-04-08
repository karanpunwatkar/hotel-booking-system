// src/components/RoomBox.jsx
const RoomBox = ({ room, onClick }) => {
    const style = {
      width: '60px',
      height: '60px',
      border: '1px solid #ccc',
      margin: '4px',
      backgroundColor: room.booked ? '#ff6b6b' : '#e0e0e0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      flexDirection: 'column',
      borderRadius: '6px',
      cursor: 'pointer',
    };
  
    return (
      <div style={style} onClick={() => onClick(room.id)} title={room.guestName}>
        <div>{room.room}</div>
        {room.booked && <div style={{ fontSize: '10px' }}>{room.guestName}</div>}
      </div>
    );
  };
  
  export default RoomBox;
  