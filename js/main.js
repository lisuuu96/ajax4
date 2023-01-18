$(document).ready(function(){
    $('#get-data').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){ 
           let dName = $('<p></p>').text(`Imie: ${data.imie}`);
           let dSurname = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
           let dCompany = $('<p></p>').text(`Firma: ${data.firma}`);
           let dOccupation = $('<p></p>').text(`Zawod: ${data.zawod}`);

            let jqDiv = $('#dane-programisty') ;

           jqDiv.append(dName);
           jqDiv.append(dSurname);
           jqDiv.append(dCompany);
           jqDiv.append(dOccupation);
        
        });

    });

});

