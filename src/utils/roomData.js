// src/utils/roomData.js

export function generateRooms() {
    const rooms = [];
  
    for (let floor = 1; floor <= 10; floor++) {
      for (let num = 1; num <= 5; num++) {
        const roomId = `${floor}${num.toString().padStart(2, '0')}`; // e.g., 101, 102...205
        rooms.push({
          id: roomId,
          floor: floor,
          booked: false
        });
      }
    }
  
    return rooms;
  }
  