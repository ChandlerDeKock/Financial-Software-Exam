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
var sneakers1 = Cookies.set("sneakers", sneakers)

function addshoes (){
   for (i = 0; i < sneakers.length; i++){
      $("#griditem").append("    <div class='col-md-6 col-lg-4' id = 'port1'>      <div class='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal1'>        <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>          <div >            <i class='fas fa-plus fa-3x'></i>          </div>          <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id = 'brand" + i +"'></h2>        </div>        <img class='img-fluid' src='img/portfolio/cabin.png' alt=''>     </div >     <h2 class='page-section-heading text-center text-uppercase text-secondary mb-0' id = 'brand" + i +"'></h2>      <li class='mb-5' id = 'style" + i +"'></li>      <li class='mb-5' id = 'colour" + i +"'></li>      <li class='mb-5' id = 'date" + i +"'></li>      <li class='mb-5' id = 'price" + i +"'></li>       </div> ")

      $("#brand" + i).html(sneakers[i].Brand);
      $("#style" + i).html( "Style: "  + sneakers[i].Style);
      $("#colour" + i).html("Colour: " + sneakers[i].Color);
      $("#date" + i).html("Date of purchase: " + sneakers[i].Date);
      $("#price" + i).html("Purchase price  " + "R " + sneakers[i].Price);
   }
}
addshoes()
   function addNewShoe(){
      var newbrand = $("#brandinput").val()
      var newstyle = $("#styleinput").val()
      var newcolor = $("#colourinput").val()
      var newprice = $("#priceinput").val()
      var newdate = $("#dateinput").val()
      var tobeadded = {       
      "Brand": newbrand,
      "Style": newstyle,
      "Color": newcolor,
      "Date": newprice,
      "Price": newdate}
      sneakers.push(tobeadded)
      
      var i = sneakers.length 
      console.log(tobeadded, i)
      $("#griditem").append("    <div class='col-md-6 col-lg-4' id = 'port1'>      <div class='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal1'>        <div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>          <div >            <i class='fas fa-plus fa-3x'></i>          </div>          <h2 class='portfolio-modal-title text-secondary text-uppercase mb-0' id = 'brand" + i +"'></h2>        </div>        <img class='img-fluid' src='img/portfolio/cabin.png' alt=''>     </div >     <h2 class='page-section-heading text-center text-uppercase text-secondary mb-0' id = 'brand" + i +"'></h2>      <li class='mb-5' id = 'style" + i +"'></li>      <li class='mb-5' id = 'colour" + i +"'></li>      <li class='mb-5' id = 'date" + i +"'></li>      <li class='mb-5' id = 'price" + i +"'></li>       </div> ")
      var i = sneakers.length 
      $("#brand" + i).html(newbrand);
      $("#style" + i).html( "Style: "  + newstyle);
      $("#colour" + i).html("Colour: " + newcolor);
      $("#date" + i).html("Date of purchase: " + newprice);
      $("#price" + i).html("Purchase price  " + "R " + newdate);
      alert("You have just added a shoe to your collection. Go check it out!")
      Cookies.set(tobeadded);
   }

   function render (){
      var i = sneakers.length 
      $("#brand" + i).html(newbrand);
      $("#style" + i).html( "Style: "  + newstyle);
      $("#colour" + i).html("Colour: " + newcolor);
      $("#date" + i).html("Date of purchase: " + snewprice);
      $("#price" + i).html("Purchase price  " + "R " + newdate);
   }