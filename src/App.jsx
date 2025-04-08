// src/App.jsx

import { useEffect, useState } from 'react';
import { generateRooms } from './utils/roomData';
import Floor from './components/Floor';

const LOCAL_STORAGE_KEY = 'hotelRoomData';


function App() {
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : generateRooms();
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);

  const toggleBooking = (id) => {
    const updatedRooms = rooms.map((room) =>
      room.id === id ? { ...room, booked: !room.booked } : room
    );
    setRooms(updatedRooms);
  };

  const filteredRooms = rooms.filter((room) => {
    if (filter === 'booked') return room.booked;
    if (filter === 'available') return !room.booked;
    return true;
  });

  const bookedCount = rooms.filter((r) => r.booked).length;
  const availableCount = rooms.length - bookedCount;

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          🏨 Hotel Room Reservation System
        </h1>

        {/* Booking Summary */}
        <div className="mb-6 text-lg font-medium text-gray-700 flex flex-col md:flex-row items-center justify-center gap-6">
          <span>📌 <strong>Booked:</strong> {bookedCount}</span>
          <span>🟢 <strong>Available:</strong> {availableCount}</span>
        </div>

        {/* Random and Reset Buttons */}
<div className="flex justify-center gap-4 mb-10">
  <button
    onClick={() => {
      const updated = rooms.map((room) => ({
        ...room,
        booked: Math.random() < 0.3, // 30% chance of booking
      }));
      setRooms(updated);
    }}
    className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
  >
    🎲 Random Booking
  </button>
  <button
    onClick={() => {
      const cleared = rooms.map((room) => ({ ...room, booked: false }));
      setRooms(cleared);
    }}
    className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-800"
  >
    🔄 Reset All
  </button>
</div>


        {/* Legend */}
        <div className="flex justify-center items-center gap-8 mb-6 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-red-400 rounded-sm"></div>
            <span>Booked</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:bg-blue-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'available'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:bg-green-50'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setFilter('booked')}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              filter === 'booked'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:bg-red-50'
            }`}
          >
            Booked
          </button>
        </div>

        {/* Floors Display */}
        <div className="space-y-6">
          {[...Array(10)].map((_, index) => {
            const floorNumber = 10 - index;
            return (
              <Floor
                key={floorNumber}
                floorNumber={floorNumber}
                rooms={filteredRooms}
                onRoomClick={toggleBooking}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
