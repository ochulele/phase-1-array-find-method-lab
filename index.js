function superbowlWin(array) {
    if(array.find(obj => obj.result === 'W')) {
        return array.find(obj => obj.result === 'W').year
    } else {
        return undefined
    }
}

// function superbowlWin(array) {
// 	return array.find(obj => obj.result === 'W') ? array.find(obj => obj.result === 'W').year : undefined
// }

// // rewritten as if/else
// if(array.find(obj => obj.result === 'W')) { //running find
// 	return array.find(obj => obj.result === 'W').year //running find AGAIN (not efficient)
// } else {
// 	return undefined
// }

// // Your second solution
// let win = array.find(determineWin);
// if(win) { // win might be a truthy value like {result: "W", year: "2020"} or it might be a falsy value like undefined
// 	// so if win is truthy
// 	return win.year;
// }
// else {
//   // so if win is falsy
// 	return undefined
// }

// let win;
// //Replacing .find method usage with a for-of loop, not recommended
// for(const element of array) {
//   if(element.result === 'W') {
// 		win = element;
// 		break; // this will end the loop right here and now, because we only want the first element that passes the test
//   }
// }
// if(win) {
//   return win.year;
// }
// else {
// 	return undefined;
// }