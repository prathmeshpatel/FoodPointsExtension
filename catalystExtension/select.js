var mealsByCategory = {
    A: ["EGG WHITES AU-BON-PAIN-SLIDE CHEDDAR", "EGG WHITES, CHEDDAR AND AVOCADO", "2 EGGS AND CHEDDAR SANDWICH", "SMOKED SALMON WASABI", "CHICKEN COBB WITH AVOCADO", "VEGETARIAN DELUXE", "CHICKEN CAESAR ASIAGO", "THAI PEANUT CHICKEN"],
    B: ["SMOOTHIES AND JUICES", "COFFEE", "FRAPPES", "CREPES", "PANNINIS"],
    C: ["Scrambled Eggs", "Grits or Potatoes", "Bacon or Sausage", "Zucchini Parmesan", "Dad’s Fish Stew", "Sauteed Kale"],
    D: ["MAKE YOUR OWN BOWL", "GINGER CHICKEN", "SESAME CHICKEN", "BULGOGI", "DUMPLINGS & SMALL BITES", "POKE BOWL", "RAMEN"],
    E: ["GARDEN SALAD", "MISO SOUP", "EDAMAME", "SEAWEED SALAD", "DELUXE SASHIMI BOWL"],
    F: ["IL FORNO WOOD-FIRED ARTISAN PIZZAS", "DESIGN YOUR OWN PIZZA", "PASTA YOUR WAY"],
    G: ["JB’S FLANK STEAK", "COAL BRAISED BEEF BRISKET", "PRIME RIB AU JUS", "BONE IN PORK CHOP"],
    H: ["ESPRESSO", "COFFEE", "TEAS, ETC"],
    I: ["BURGERS", "FISH", "SALADS", "SOUPS", "BUILD YOUR OWN PIZZA"],
    J: ["Egg McMuffin", "Egg White Delight", "Hamburger", "Cheeseburger", "Grilled Onion Cheddar", "Big Mac", "Filet-O-Fish", "McDouble"]
};

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
