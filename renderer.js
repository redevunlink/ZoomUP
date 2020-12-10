      const electron = require('electron')
const path = require('path')

window.$ = window.jQuery = require('jquery');
const prompt = require('electron-prompt');
fs = require('fs');
fs.writeFile('./test.json', '[', { flag: 'wx' }, function (err) {
    if (err) throw err;
    console.log("It's saved!");
});
fs.readFile('./test.json', 'utf8', function (error, data) {
    if (error) throw error;
    var traworlds = data.toString();
    var traworld = JSON.parse(traworlds);
    
var count = 0;
//var count = persons.length;          // wont work
for ( property in traworld )          // should return 2
{
   if(traworld.hasOwnProperty(property))
   {
      count++;
   }
}
document.getElementById('meetingcount').innerHTML = count;
var list = traworld;
constructTable('#table');
function constructTable(selector) { 
              
            // Getting the all column names 
            var cols = Headers(list, selector);   
   
            // Traversing the JSON data 
            for (var i = 0; i < list.length; i++) { 
                var row = $('<tr class="bg-white border-4 border-gray-200 h-12"/>');    
                for (var colIndex = 0; colIndex < cols.length; colIndex++) 
                { 
                    var val = list[i][cols[colIndex]]; 
                      
                    // If there is any key, which is matching 
                    // with the column name 
                    if (val == null) val = "";   
                        row.append($('<td class="bg-white border-4 border-gray-200 h-12"/>').html(val)); 
                } 
                  
                // Adding each row to the table 
                $(selector).append(row); 
            } 
        } 
          
        function Headers(list, selector) { 
            var columns = []; 
            var header = $('<tr class="bg-gray-800 text-white h-12"/>'); 
              
            for (var i = 0; i < list.length; i++) { 
                var row = list[i]; 
                  
                for (var k in row) { 
                    if ($.inArray(k, columns) == -1) { 
                        columns.push(k); 
                          
                        // Creating the header 
                        header.append($('<th/>').html(k)); 
                    } 
                } 
            } 
              
            // Appending the header to the table 
            $(selector).append(header); 
                return columns; 
        }        
});
