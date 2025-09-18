// Challenge 2: Speed Detector (Toy Problem) //

function checkSpeed(speed) {
  // Function to evaluate driver's speed
  const speedLimit = 70; // Speed limit
  const kmPerPoint = 5; // 1 point for every 5 km above the limit

  if (speed < speedLimit) {
    // If speed is within the limit
    console.log("Ok"); // Print 'Ok'
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint); // Calculate demerit points
    if (points > 12) {
      // If points exceed 12
      console.log("License suspended"); // Print suspension message
    } else {
      console.log("Points: " + points); // Print number of points
    }
  }
}
