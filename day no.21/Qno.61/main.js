/*Question 61: Making Enums for Vehicles:
Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.*/
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
    vehicles[vehicles["bus"] = 3] = "bus";
    vehicles[vehicles["train"] = 4] = "train";
    vehicles[vehicles["bicycle"] = 5] = "bicycle";
    vehicles[vehicles["airplane"] = 6] = "airplane";
})(vehicles || (vehicles = {}));
;
console.log(vehicles.bicycle);
