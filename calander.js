<div class="calendar" id="calendar">
    <div class="calendar-btn month-btn" onclick="$('#months').toggle('fast')">
        <span id="curMonth"></span>
        <div id="months" class="months dropdown"></div>
    </div>

    <div class="calendar-btn year-btn" onclick="$('#years').toggle('fast')">
        <span id="curYear"></span>
        <div id="years" class="years dropdown"></div>
    </div>

    <div class="clear"></div>

    <div class="calendar-dates">
        <div class="days">
            <div class="day label">SUN</div>
            <div class="day label">MON</div>
            <div class="day label">TUE</div>
            <div class="day label">WED</div>
            <div class="day label">THUR</div>
            <div class="day label">FRI</div>
            <div class="day label">SAT</div>

            <div class="clear"></div>
        </div>

        <div id="calendarDays" class="days">
        </div>
    </div>
</div>
<script>
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function drawCalendarMonths()
    {
        for(var i = 0; i < months.length; i++)
        {
            var doc = document.createElement("div");
            doc.innerHTML = months[i];
            doc.classList.add("dropdown-item");

            doc.onclick = (function () {
                var selectedMonth = i;
                return function ()
                {
                    month = selectedMonth;
                    document.getElementById("curMonth").innerHTML = months[month];
                    loadCalendarDays();
                    return month;
                }
            })();

            document.getElementById("months").appendChild(doc);
        }
    }
</script>
Running that function, the result should be the following:


Building A Responsive Calendar In JavaScript Part 1
Make note of the loadCalendarDays() function being called when we select a new month. This function will redraw the calendar whenever a new month is selected to reflect the new month selection.

Creating the years
We can follow a similar process to render the years dropdown.


    function loadYears()
    {
        // whichever date range makes the most sense
        var startYear = 1900;
        var endYear = 2022;

        for(var i = startYear; i <= endYear; i++)
        {
            var doc = document.createElement("div");
            doc.innerHTML = i;
            doc.classList.add("dropdown-item");

            doc.onclick = (function(){
                var selectedYear = i;
                return function(){
                    year = selectedYear;
                    document.getElementById("curYear").innerHTML = year;
                    loadCalendarDays();
                    return year;
                }
            })();

            document.getElementById("years").appendChild(doc);
        }
    }