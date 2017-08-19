$(document).ready(function() {
  //Input zip code-Page 1

  //Submit zip
  // $('#zip-submit').on('click', function(event) {
  //   event.preventDefault();
  //   //grab zip
  //   var zipcode = $('#zip-input').val().trim();

  //   //call API to find state of zip-input
  //   var key = "AIzaSyAaK5LW94pb1MJ1T8qZ_am1xvXEdwEuC0w";
  //   var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=" + key;;
  //   console.log(queryURL);

  //   $.ajax({
  //       url: queryURL,
  //       method: "GET"
  //     })
  //     .done(function(response) {
  //       console.log(response);
  //       var results = response.results[0].address_components;
  //       var city = results[1].long_name;
  //       var stateAbv = results[4].short_name;
  //       $('#zip-input').val("");
  //       location.href = "budget.html";
  //     })


  // });



  //Average gas call

  var queryURLGas = "https://www.quandl.com/api/v3/datasets/FRED/GASREGCOVW.json?api_key=YLrr6a7wymzzjhMCd_xr"

  $.ajax({
      url: queryURLGas,
      method: "GET"
    })
    .done(function(response) {
      var results = response.dataset.data[0][1];
      console.log(results);
      $('#gas').text(results);
    })

  //NASDAQ call
  var queryURLNasdaq = "https://www.quandl.com/api/v3/datasets/NASDAQOMX/COMP.json?api_key=YLrr6a7wymzzjhMCd_xr&start_date=2017-08-12";

  // $.ajax({
  //     url: queryURLNasdaq,
  //     method: "GET"
  //   })
  //   .done(function(numbers) {
  //     var numbers = numbers.dataset.data[0][1];
  //     console.log(numbers);
  //     $("#nasdaq").text(numbers)
  //   })

  // //S&P call
  // var queryURLSP = "https://www.quandl.com/api/v3/datasets/YALE/SPCOMP.json?api_key=YLrr6a7wymzzjhMCd_xr";
  // $.ajax({
  //     url: queryURLSP,
  //     method: "GET"
  //   })
  //   .done(function(spnumbers) {
  //     var spnumbers = spnumbers.dataset.data[0][1];
  //     $("#sp").text(spnumbers);
  //   })

  //Makin' ID's
  var incomeCount = 1; // count starts here because there is already 1 income item
  var expenseCount = 4; // count starts here because there are alread 4 expense items
  var incomeArray = [];
  var expensesArray = [];

  // function getNextIds() {
  //   idCount++;
  //   return [("label_" + idCount), ("amount_" + idCount)]
  // }

  // Dynamic add to results.
  $('#housing-amount-input').keyup(mirrorInput);
  $('#utilities-amount-input').keyup(mirrorInput);
  $('#gas-amount-input').keyup(mirrorInput);

  var $results = $(".results-text");

  function clearResults() {
    $results.text('');
  }

  function mirrorInput(event) {
    clearResults();
    var amountDisplayId = $(this).attr("data-mirror-amount");
    var labelDisplayId = $(this).attr("data-mirror-label");
    var amountDisplay = $("#" + amountDisplayId);
    console.log(amountDisplayId);
    var labelDisplay = $("#" + labelDisplayId);
    amountDisplay.removeClass("hidden");
    labelDisplay.removeClass("hidden");
    var amount = $(this).val().trim();
    amountDisplay.text(amount);
    console.log(amount);
  }






  // Adding income button function.
  $("#add-income").click(function() {
    // Create the div
    var outerDiv = $('<div class="row repeating-income-row">');
    incomeCount++;


    // $("<div class='row repeating-income-row'> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>")
    //Create input
    //Add keyup event for mirrorInput
    //Get Ids, add as attr on input
    //Put input in Div
    //Append to income-block
    $("#income-block").append("<div class='row repeating-income-row'> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
    $("#income-label-input").attr("id", "income-label-input income-label-" + incomeCount);
    $("#income-amount-input").attr("id", "income-amount-input income-" + incomeCount);
  });
  // Adding expense button function.
  $("#add-expenses").click(function() {
    $("#expenses-block").append("<div class='row repeating-expenses-row'> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
    $("#expenses-label-input").attr("id", "expenses-label-input expenses-label-" + expenseCount);
    $("#expenses-amount-input").attr("id", "expenses-amount-input expenses-" + expenseCount);

  });

  // MATH FUNCTION

  // Capture the values of the income amounts
  // Capture the values of the expense amounts
  // Create a math function that will add the passed values and store them in a 'total' variable

  // function addInputs (x,y,z)

});