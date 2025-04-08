// src/components/RoomModal.jsx

function RoomModal({ room, onClose, onToggleBooking }) {
    if (!room) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">Room {room.id}</h2>
          <p className="mb-2"><strong>Floor:</strong> {room.floor}</p>
          <p className="mb-4">
            <strong>Status:</strong>{' '}
            {room.booked ? (
              <span className="text-red-600">Booked</span>
            ) : (
              <span className="text-green-600">Available</span>
            )}
          </p>
          <div className="flex justify-between gap-4 mt-6">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className={`px-4 py-2 rounded ${
                room.booked ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
              onClick={() => {
                onToggleBooking(room.id);
                onClose();
              }}
            >
              {room.booked ? 'Cancel Booking' : 'Book Room'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default RoomModal;
  