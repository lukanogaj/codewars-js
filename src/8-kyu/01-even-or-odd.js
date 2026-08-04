// 20.06.2026 Saturday
// function enough(cap, on, wait) {
// 	// your code here
// 	//   cap is the amount of people the bus can hold excluding the driver.
// 	//  on is the number of people on the bus excluding the driver.
// 	//wait is the number of people waiting to get on to the bus excluding the driver.

function enough(cap, on, wait) {
	// your code here
	//   cap is the amount of people the bus can hold excluding the driver.
	//  on is the number of people on the bus excluding the driver.
	//wait is the number of people waiting to get on to the bus excluding the driver.
	if (on + wait > cap) {
		return on + wait - cap;
	}
}
