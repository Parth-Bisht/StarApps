//Fly me to my destination - It's urgent!!
// I am following the greedy approach to solve this problem

function min_planes(fuel) {
  let n = fuel.length;
  if (n == 0) return -1; // if there is no planes it will return -1
  let planes = 1,
    curr_fuel = fuel[0], // initially putting current fuel as the first element because evertime it will start from the first element
    remaining_fuel = fuel[0]; //similar for remaining fuel

  for (let i = 1; i < n; i++) {
    remaining_fuel -= 1; // if planes moves forward 1 fuel will gets deducted from the remaing fuel
    if (remaining_fuel < 0) return -1; // if at any point of time the remaining fuel becomes less than 0, that means plane can't move forward
    if (fuel[i] > remaining_fuel) {
      planes += 1; // of current fuel is greater than the remaining fuel the plane count will get increse
      remaining_fuel = fuel[i];
    }
    curr_fuel += fuel[i]; // adding the fuel to the current fuel
  }
  return curr_fuel >= n - 1 ? planes - 1 : -1; //checks if the total fuel available is enough to reach the last airport. If not, it returns -1
}

let arr = [1, 6, 3, 4, 5, 0, 0, 0, 6];
let arr1 = [2, 1, 2, 3, 1];
let arr2 = [10,0,0,0,0,0,0,0,0,0,1]
console.log(min_planes(arr));
console.log(min_planes(arr1));
console.log(min_planes(arr2));
