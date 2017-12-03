var mealsByCategory = [
    A: {"EGG WHITES AU-BON-PAIN-SLIDE CHEDDAR": 5.49, "EGG WHITES, CHEDDAR AND AVOCADO":3.99, "2 EGGS AND CHEDDAR SANDWICH":4.99, "SMOKED SALMON WASABI":6.99, "CHICKEN COBB WITH AVOCADO":7.59, "VEGETARIAN DELUXE":4.99, "CHICKEN CAESAR ASIAGO":1.99, "THAI PEANUT CHICKEN":2.99},
    B: {"SMOOTHIES AND JUICES":4.00, "COFFEE":2.00, "FRAPPES":3.00, "CREPES":6.00, "PANINIS":4.00},
    C: {"Scrambled Eggs":4.00, "Grits or Potatoes":5.00, "Bacon or Sausage":3.00, "Zucchini Parmesan":5.00, "Dad’s Fish Stew":2.00, "Sauteed Kale":2.00},
    D: {"MAKE YOUR OWN BOWL":6.49, "GINGER CHICKEN":9.00, "SESAME CHICKEN":8.00, "BULGOGI":10.59, "DUMPLINGS & SMALL BITES":7.99, "POKE BOWL":10.15, "RAMEN":11.15},
    E: {"GARDEN SALAD":6.00, "MISO SOUP":4.99, "EDAMAME":1.59, "SEAWEED SALAD":3.99, "DELUXE SASHIMI BOWL":11.99}
    F: {"IL FORNO WOOD-FIRED ARTISAN PIZZAS":9.99, "DESIGN YOUR OWN PIZZA":8.99, "PASTA YOUR WAY":7.99},
    G: {"JB’S FLANK STEAK":11.99, "COAL BRAISED BEEF BRISKET":12.99, "PRIME RIB AU JUS":11.59, "BONE IN PORK CHOP":12.19},
    H: {"ESPRESSO":2.99, "COFFEE":1.99, "TEAS":1.19},
    I: {"BURGERS":11.99, "FISH":10.15, "SALADS":7.59, "SOUPS":4.59, "BUILD YOUR OWN PIZZA":10.99},
    J: {"Egg McMuffin":3.49, "Egg White Delight":4.19, "Hamburger":3.99, "Cheeseburger":5.99, "Grilled Onion Cheddar":7.99, "Big Mac":3.19, "Filet-O-Fish":1.99, "McDouble":1.99}
];


function changecat(value) {
    if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
    else {
        var catOptions = "";
        for (var categoryId in mealsByCategory[value]) {
            catOptions += "<option>" + mealsByCategory[value][categoryId] + "</option>";
        }
        document.getElementById("category").innerHTML = catOptions;
    }
}
