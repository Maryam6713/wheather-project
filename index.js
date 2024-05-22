var weather = prompt("enter weather name")
if (weather == "Karachi") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="karachi.jpg" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}


else if (weather == "Lahore") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="party-cloudy.jpg" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}


 else if (weather == "Islamabad") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="islamabad2.jpg" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "Quetta") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="snowfall.jpg" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "Balochistan") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="balochistan.jpg" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}

else if (weather == "Punjab") {
    document.write('<div class="card w-50 m-auto mt-5 bg-dark" style="width: 18rem;">' +
        '<img src="stormy.avif" class="card-img-top rounded-5" alt="...">' +
        ' <div class="card-body ">' +
         '  <h1 class="card-text text-center">' + "Today's " + weather + ' Weather' + '</h1>' +
         ' </div>' +         ' </div>');
}

else { document.write('<div class="card w-25 m-auto mt-5 bg-dark" style="width: 18rem;">' +
'<img src="oops.png" class="card-img-top rounded-5 img-fluid " alt="...">' +
' <div class="card-body ">' +
 '  <h1 class="card-text text-center">' + "Sorry! Please try again....."  + '</h1>' +
 ' </div>' +         ' </div>');
}
















