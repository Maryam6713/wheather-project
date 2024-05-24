var weather = prompt("Enter the city name \n (Karachi, Lahore, Islamabad, Punjab, Quetta, Balochistan)")
if (weather == "karachi") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark " style="width: 18rem ;">' +
        '<img src="karachi.jpg" class="card-img-top img-fluid rounded-5 " alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's Karachi Weather "+ '</h1>' +
         ' </div>' +         ' </div>');
}


else if (weather == "lahore") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="party-cloudy.jpg" class="card-img-top rounded-5 img-fluid" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's Lahore Weather " + '</h1>' +
         ' </div>' +         ' </div>');
}


 else if (weather == "islamabad") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="islamabad2.jpg" class="card-img-top rounded-5 img-fluid" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's Islamabad Weather " + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "quetta") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="snowfall.jpg" class="card-img-top rounded-5 img-fluid" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's Quetta Weather " + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "balochistan") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="balochistan.jpg" class="card-img-top rounded-5 img-fluid" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's balochistan Weather " + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "punjab") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="stormy.avif" class="card-img-top rounded-5 img-fluid" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's Punjab Weather " + '</h1>' +
         ' </div>' +         ' </div>');
}

else { document.write('<div class="card w-25 m-auto mt-5 bg-dark" style="width: 18rem;">' +
'<img src="oops.png" class="card-img-top rounded-5 img-fluid " alt="...">' +
' <div class="card-body ">' +
 '  <h1 class="card-text text-center">' + "Sorry! Please try again....."  + '</h1>' +
 ' </div>' +         ' </div>');
}
















