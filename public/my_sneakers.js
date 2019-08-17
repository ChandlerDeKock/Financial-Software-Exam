//importing the JSON file
var sneakers = [
    {
       "Brand": "Nike",
       "Style": "Cortez",
       "Color": "White",
       "Date": "2019-01-30",
       "Price": "1500"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 97",
       "Color": "Red",
       "Date": "2018-04-02",
       "Price": "1700"
    },
    {
       "Brand": "Adidas",
       "Style": "Ultra Boost",
       "Color": "Black",
       "Date": "2018-06-18",
       "Price": "1800"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "Blue",
       "Date": "2019-02-03",
       "Price": "1500"
    },
    {
       "Brand": "Adidas",
       "Style": "Stan Smith",
       "Color": "White",
       "Date": "2018-02-15",
       "Price": "1500"
    },
    {
       "Brand": "Adidas",
       "Style": "Ultra Boost",
       "Color": "Silver",
       "Date": "2018-05-01",
       "Price": "1800"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "White / Red",
       "Date": "2018-07-22",
       "Price": "1700"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "Navy",
       "Date": "2018-01-31",
       "Price": "1500"
    },
    {
       "Brand": "New Balance",
       "Style": "997 Classic",
       "Color": "Blue",
       "Date": "2018-12-23",
       "Price": "1100"
    },
    {
       "Brand": "Puma",
       "Style": "Suede Classic",
       "Color": "Silver",
       "Date": "2018-11-01",
       "Price": "1300"
    },
    {
       "Brand": "Nike",
       "Style": "Air Vapormax",
       "Color": "Black",
       "Date": "2019-03-29",
       "Price": "3000"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 95",
       "Color": "Neon",
       "Date": "2018-02-15",
       "Price": "1500"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 97",
       "Color": "Silver",
       "Date": "2018-10-22",
       "Price": "1800"
    },
    {
       "Brand": "Nike",
       "Style": "Air Max 90",
       "Color": "White / Red",
       "Date": "2018-07-22",
       "Price": "1700"
    },
    {
       "Brand": "Nike",
       "Style": "Air Force 1",
       "Color": "Navy",
       "Date": "2019-02-14",
       "Price": "1500"
    },
    {
       "Brand": "Adidas",
       "Style": "Gazelle",
       "Color": "Blue",
       "Date": "2018-01-01",
       "Price": "1300"
    },
    {
       "Brand": "Nike",
       "Style": "Air Presto",
       "Color": "Black",
       "Date": "2018-04-28",
       "Price": "1300"
    }
];

//creating the html elements from the sneakers database
$(port1).click(function(){
   $(brand1).html(sneakers[0].Brand);
   $(style1).html( "Style: "  + sneakers[0].Style);
   $(colour1).html("Colour: " + sneakers[0].Color);
   $(date1).html("Date of purchase: " + sneakers[0].Date);
   $(price1).html("Purchase price  " + "R " + sneakers[0].Price);
<<<<<<< Updated upstream
});
=======
});

<<<<<<< Updated upstream
for (var i = 0 ; sneakers.length ; i++){
   
};
=======
// for (var i = 0 ; sneakers.length ; i++){
   
// };
>>>>>>> Stashed changes
>>>>>>> Stashed changes
