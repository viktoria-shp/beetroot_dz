function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("card__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("card__tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.className += " active";
    drawCharts();
  }

  if (document.querySelectorAll('.card__tablinks').length) {
    document.querySelectorAll('.card__tablinks').forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        openTab(item, item.getAttribute('data-tab-id'));
      });
    });
  }

  if (document.querySelectorAll('.card__tablinks[data-tab-id="inf"]').length) {
      document.querySelectorAll('.card__tablinks[data-tab-id="inf"]')[0].click();
  }

  function drawCharts() {
    var circles = document.querySelectorAll(".percent-circle");  
    circles.forEach(function(el) {
      //pull the percentage and turn it into a fraction
      var percent = el.dataset.percent / 100;
      //work out the circumference from the width
      var diameter = el.offsetWidth;
      var circumference = Math.ceil(diameter * Math.PI);
      //now we have the circumference, we know how long the ouline should be
      var stroke = Math.ceil(circumference * percent);
      //also workout how long the line doesn't exist for
      var diff = circumference - stroke;

      //now add the strok dash array for the first two values
      //TODO : could this all be done with css?
      el.querySelector(".percent-circle-inner").style.strokeDasharray =
        stroke + "px " + diff + "px";
    });
  }
  (function() { 
    document.addEventListener("DOMContentLoaded", drawCharts);
  })();