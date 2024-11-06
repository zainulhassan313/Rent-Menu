
var main = prompt("What do you want to do: " + " 1. Book a room " + " 2. Book a Car " + " 3. Report a problem " + "(Enter a number)");

if (main === "1") {
    var dayRent = 50;
    var days = prompt("How many days do you want to stay in room?  ( Please enter a number ) ");
    if (days <= "0") {
        alert("Invalid input!");
    }

    else {
        var hotelTotal = "$" + dayRent * days;
        alert(`Room booked! Your total ${hotelTotal}.`);
    }
}

else if (main === "2") {
    var Cars = prompt(" 1. Prado " + " 2. Fortuner " + " 3. Landcruiser " + " 4. Hilux4x4 " + " 5. Hijet " + " 6. Prius " + " 7. C-HR ")
    var driver = prompt("Do you need a driver (y/n)");
    var rentTotal = 25;
    if (driver === "y") {
        ++rentTotal
    }
    alert(`Car booked! Your total ${rentTotal}.`)

}

else if (main === "3") {
    var problem = prompt(" 1. Problem in room " + " 2. Problem in car " + " 3. Other " + "(Enter a number)")
    if (problem === "1") {
        alert("We will visit your room soon and solve the problem.");
    }
    else if (problem === "2") {
        alert(`"Whatever problem the car has we will fix it soon"`)
    }
    else {
        alert("Let us know the details by contacting this number 0315-8361503");
    }
}

else {
    alert("Invalid input!");
}
