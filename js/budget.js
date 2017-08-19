$(document).ready(function() {
  //Input zip code-Page 1

  //Submit zip
  $('#zip-submit').on('click', function(event) {
    event.preventDefault();
    //grab zip
    var zipcode = $('#zip-input').val().trim();

    //call API to find state of zip-input
    var key = "AIzaSyAaK5LW94pb1MJ1T8qZ_am1xvXEdwEuC0w";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=" + key;;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        console.log(response);
        var results = response.results[0].address_components;
        var city = results[1].long_name;
        var stateAbv = results[4].short_name;
        $('#zip-input').val("");
        location.href = "budget.html";
      })


  });

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

<<<<<<< HEAD
    //Submit zip
    $('#zip-submit').on('click', function(event) {
        event.preventDefault();
        //grab zip
        var motivator = $('#motivator-input').val().trim();

        //call API to find state of zip-input
        var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=89c449566588482fb23b28bd30d3312e&limit=1&q=" + motivator;
        console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                console.log(response);
                var results = response.data[0].embed_url;

                $('#motivator-display').append(results);

                $('#motivator-input').val("");

                // location.href = "budget.html";
=======
  //NASDAQ call
  var queryURLNasdaq = "https://www.quandl.com/api/v3/datasets/NASDAQOMX/COMP.json?api_key=YLrr6a7wymzzjhMCd_xr&start_date=2017-08-12";

  $.ajax({
      url: queryURLNasdaq,
      method: "GET"
    })
    .done(function(numbers) {
      var numbers = numbers.dataset.data[0][1];
      console.log(numbers);
      $("#nasdaq").text(numbers)
    })

  //S&P call
  var queryURLSP = "https://www.quandl.com/api/v3/datasets/YALE/SPCOMP.json?api_key=YLrr6a7wymzzjhMCd_xr";
  $.ajax({
      url: queryURLSP,
      method: "GET"
    })
    .done(function(spnumbers) {
      var spnumbers = spnumbers.dataset.data[0][1];
      $("#sp").text(spnumbers);
    })

  //Values of Inputs
  // var firstIncome = $('#income-amount-input').val().trim();
  // var housingInput = $('#housing-amount-input').val().trim();
  // var utilityInput = $('#utilities-amount-input').val().trim();
  // var gasInput = $('#gas-amount-input').val().trim();

  // Dynamic add to results.
  var resultsDiv = $("<div class='next-result'>");
  var resultsDiv1 = $("<div class='next-result1'>");
  $('#housing-amount-input').keyup(function() {
    $(".results-text").html("<h4> Housing </h4>" + $('#housing-amount-input').val().trim());
    $(".results-text").append(resultsDiv);
  })

  $('#utilities-amount-input').keyup(function() {
    $('.next-result').html("<h4> Utilities </h4>" + $("#utilities-amount-input").val().trim());
    $(".results-text").append(resultsDiv);
  })
  $('#gas-amount-input').keyup(function() {
    $('.next-result1').html("<h4> Gas </h4>" + $("#gas-amount-input").val().trim());
    $(".results-text").append(resultsDiv1);
  })

>>>>>>> ea362c3dba2873eba5835800c8bc74d3ef156ac8






<<<<<<< HEAD
    // Adding income button function.
    $("#add-income").click(function() {
        $("#income-block").append("<div class='row repeating-income-row'> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
    });
    // Adding expense button function.
    $("#add-expenses").click(function() {
        $("#expenses-block").append("<div class='row repeating-expenses-row'> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");


    });

    //Values of Inputs
    // var firstIncome = $('#income-amount-input').val().trim();
    // var housingInput = $('#housing-amount-input').val().trim();
    // var utilityInput = $('#utilities-amount-input').val().trim();
    // var gasInput = $('#gas-amount-input').val().trim();

    // Dynamic add to results.
    var resultsDiv = $("<div class='next-result'>");
    var resultsDiv1 = $("<div class='next-result1'>");
    $('#housing-amount-input').keyup(function() {
        $(".results-text").html("<h4> Housing </h4>" + $('#housing-amount-input').val().trim());
        $(".results-text").append(resultsDiv);
    })
=======
  // Adding income button function.
  $("#add-income").click(function() {
    $("#income-block").append("<div class='row repeating-income-row'> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
  });
  // Adding expense button function.
  $("#add-expense").click(function() {
    $("#expenses-block").append("<div class='row repeating-expenses-row'> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
>>>>>>> ea362c3dba2873eba5835800c8bc74d3ef156ac8


  });

});
