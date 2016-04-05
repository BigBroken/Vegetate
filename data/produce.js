
var twoDays = 'Artichokes Asparagus Avocados Beans Blackberries Broccoli Cherries Corn Mushrooms Mustard_Greens Okra Raspberries Strawberries Watercress';

twoDays = twoDays.split(' ');
twoDays[9] = 'Mustard Greens'

twoDays = twoDays.map(function(item){
  return {
    name: item,
    shelf_life: 2880
  };
});
// console.log(twoDays)

var fourDays = 'Arugula Bananas BokChoy Broccoli Rabe Cantaloupe Chard CollardGreens Cucumbers Eggplant Grapes HoneydewMelon Kohlrabi Kumquats Lettuce Mango Nectarines Papaya Peaches Persimmons Pineapple Plantains Radicchio YellowSquash Zucchini';

fourDays = fourDays.split(' ');
fourDays[2] = 'Bok Choy';
fourDays[7] = 'Collard Greens';
fourDays[11] = 'Honeydew Melon';
fourDays[23] = 'Yellow Squash';

fourDays = fourDays.map(function(item){
  return {
    name: item,
    shelf_life: 5760
  };
});
// console.log(fourDays);

var sixDays = 'Apricots Bell Peppers Blueberries Brussels Sprouts Cauliflower Clementines Grapefruit GreenOnions Jalapenos Kale Kiwi Leeks Lemons Limes Lychees Oranges Pears Plums Spinach Tangerines Tomatoes Watermelon';

sixDays = sixDays.split(' ');
sixDays[9] = 'Green Onions';


// console.log(sixDays);

sixDays = sixDays.map(function(item){
  return {
    name: item,
    shelf_life: 8640
  };
});

// console.log(sixDays);

var fifteenDays = 'AcornSquash Apples Beets ButternutSquash Cabbage Carrots Celeriac Celery Cranberries Garlic Onions Parsnips Pomegranates Potatoes Pumpkin Radishes Rutabagas Shallots SpaghettiSquash Sunchokes SweetPotatoes Tomatillos';


fifteenDays = fifteenDays.split(' ');
fifteenDays[0] = 'Acorn Squash';
fifteenDays[3] = 'Butternut Squash';
fifteenDays[18] = 'Spaghetti Squash';
fifteenDays[20] = 'Sweet Potatoes';


// console.log(fifteenDays);

fifteenDays = fifteenDays.map(function(item){
  return {
    name: item,
    shelf_life: 21600
  };
});
exports.data = twoDays.concat(sixDays,fourDays,fifteenDays);
// console.log(data);
