$(document).ready(function(){
        $("#loading").show();
        $(".fArr").hide();

              //Change to English
              $('#change-us').click(function(){
               
                $('#arr').text("Arrivals");
                $('#dep').text("Departures");

                 $('#flight').text("Flight");
                $('#origin').text("Destination");
                $('#airline').text("Airline");
                $('#terminal').text("Terminal");
                $('#arrival').text("Depart");
                $('#status').text("Status (min)");
   
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                
               $('#arr').text("الوصول");
                $('#dep').text("المغادرين");

                 $('#flight').text("طيران");
                $('#origin').text("المكان المقصود");
                $('#airline').text("شركة طيران");
                $('#terminal').text("طرفية");
                $('#arrival').text("تغادر");
                $('#status').text("الحالة");

              });


        var today = new Date();
        var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        var time = today.getHours()
        var url = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/airport/status/RUH/dep/"+date+"/"+time+"?appId=f936d7ec&appKey=983fde76a1afb8a8120ff6c1a38a0dbc&utc=false&numHours=1&maxFlights=10&callback=?";

        $.ajax({
            type: "GET",
            url:url,
            dataType: "JSONP",
            success: function(data) {
              $("#loading").hide();
              $(".fArr").show();

               var airport = "King Khaled International Airport(RUH)";
               var finalF = data.flightStatuses;

               finalF = finalF.sort(function(a,b){
               //sorting based on arrival time
                    var a1 = a.arrivalDate.dateLocal, b1=b.arrivalDate.dateLocal;
                    if(a1==b1) return 0;
                    return a1>b1?1:-1;
                });

             for(i=0;i<finalF.length;i++)
             {

                var origin = finalF[i].arrivalAirportFsCode;
                var airline = finalF[i].carrierFsCode;
                var flight = finalF[i].flightNumber;
                var arrival = finalF[i].departureDate.dateLocal;
                

                var terminal;
                if("airportResources" in finalF[i])
                { 
                  if("departureTerminal" in finalF[i].airportResources)
                  {
                    terminal = finalF[i].airportResources.departureTerminal;
                    var dep_gate = finalF[i].airportResources.departureGate;

                    if(dep_gate){dep_gate = "- "+dep_gate;}
                    else {dep_gate = "- ON GATE";}
                  }
                }
                
                var dep_time, sch_dep_time,delay;
                if(("departureDate" in finalF[i]) && ("operationalTimes" in finalF[i]))
                  { 
                    dep_time = finalF[i].departureDate.dateLocal;
                    sch_dep_time = finalF[i].operationalTimes.scheduledGateDeparture;

                    if(dep_time==sch_dep_time){delay=0;}
                    if(dep_time>sch_dep_time){delay=true;}
                  }
                else
                  {delay=0}


                var status, flight_status;
                flight_status = finalF[i].status;

                if(flight_status=="S"){flight_status="Scheduled";}
                if(flight_status=="A"){flight_status="Active";}
                if(flight_status=="U"){flight_status="Unknown";}
                if(flight_status=="R"){flight_status="Redirected";}
                if(flight_status=="L"){flight_status="Landed";}
                if(flight_status=="D"){flight_status="Diverted";}
                if(flight_status=="C"){flight_status="Cancelled";}
                if(flight_status=="NO"){flight_status="Not Operational";}
                  
                //Date and Time conversion
               var arrTime = arrival.substring(11,16);
                  var H = +arrTime.substr(0, 2);
                arrTime = H + arrTime.substr(2,3);
                
                if(delay){status= "DELAYED";}
                else {status="ON TIME";}

                $('.row'+i).html(airline+" "+ flight);
                $('.origin'+i).html(origin);
                $('.airline'+i).html(airline);
                $('.flight'+i).html(terminal + dep_gate);
                $('.arrival'+i).html(arrTime);
                $('.status'+i).html(flight_status+"- "+ status);


                var dir = '../../images/airlines/'+airline+'.jpg';
                //var dir1 = '../../images/airlines/airline.jpg';
                $('#img'+i).attr('src',dir).height(100).width(100);


               }
          
            },
        
          });
      });