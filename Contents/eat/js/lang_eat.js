$(document).ready(function(){

              //Change to English
              //$('#change-us').click(function(){
               
                $('.titl1').text("LaGuardia Airport Eat page");
                $('#txt1').text("Here you can discover all of our food and beverage options, where they are located, and what's on the menu.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#cafe').text("Cafe");
                $('#restau').text("Restaurants");
                $('#arloung').text("Airport Lounges");
                $('#inside').text("Inside Airport");
                $('#outside').text("Outside Airport");

                $('#c3').text("Starbucks 1");
                $('#c4').text("Battler");
                $('#c5').text("Mamma Roti Cafe");
                $('#c6').text("Caribou Coffee");
                $('#c7').text("Wayne's Coffee");
                $('#c8').text("Dunkin' Donuts");
                $('#c9').text("Java Coffee");
                $('#c10').text("Starbucks 2");

                $('#r11').text("Burger King");
                $('#r12').text("Chicken Restaurant");
                $('#r13').text("Pinkberry");
                $('#r14').text("Domino's Pizza");
                $('#r15').text("The Globe Restaurant");
                $('#r16').text("Piatto");
                $('#r17').text("Najd Village");
                $('#r18').text("Outback");

                $('#10').text("Alfursan Lounges");
                $('#11').text("Lounge 1");
                $('#12').text("Lounge 2");
                $('#btn').text("View Menu");
                
            //});

              //Change to Arabic
              $('#change-ar').click(function(){
                
                $('.titl1').text("مطار الرياض صفحة العرض");
                $('#txt1').text("هنا يمكنك اكتشاف كل من خيارات الطعام والشراب، حيث أنها تقع، وما هو على القائمة.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#cafe').text("كافيه");
                $('#restau').text("مطاعم");
                $('#arloung').text("صالات المطار");
                $('#inside').text("داخل المطار");
                $('#outside').text("خارج المطار");

                $('#c3').text("ستاربكس 1");
                $('#c4').text("المقاتل");
                $('#c5').text("ماما روتي كافيه");
                $('#c6').text("كاريبو، بني اللون");
                $('#c7').text("قهوة واين");
                $('#c8').text("دنكن \"للكعك المقلي");
                $('#c9').text("قهوة جافا");
                $('#c10').text("ستاربكس 2");

                $('#r11').text("برغر كينغ");
                $('#r12').text("مطعم دجاج");
                $('#r13').text("بينك بيري");
                $('#r14').text("بيتزا دومينوز");
                $('#r15').text("مطعم غلوب");
                $('#r16').text("بيتو");
                $('#r17').text("قرية نجد");
                $('#r18').text("المناطق النائية");

                $('#10').text("صالات الفرسان");
                $('#11').text("صالة 1");
                $('#12').text("صالة 2");
                $('#btn').text("عرض القائمة");

                
              });


                    $('#btn').hide();
                    $('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            var $this = $(this);
                            $this.next('ul').siblings('ul').slideUp();
                            $this.next('ul').find('ul').slideUp();
                            $this.next().slideToggle(300); 
                    });

          function display(data)
          { 
            console.log(data);

                  for(var i=3; i<=10; i++){
                      function clickHandler_eat(num){
                        //For Eat 
                           $('#c'+i).click(function()
                           {      
                               $('#icon').hide();                          
                                var url = data.Sheet1[num].IMG_SRC;
                               //photo/submenu/buyuk/cafe.png
                               // var url = "photo/submenu/buyuk/dunkin.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 80%"});
                               
                                    $('#title').text(data.Sheet1[num].NAME_BASE);
                                    $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                    $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                    $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_eat(i);
                  } //for loop ends here

                  for(var i=0; i<=2; i++){
                      function clickHandler_lounge(num){
                        //For Eat 
                           $('#l'+i).click(function()
                           {
                               $('#icon').hide();                                
                                 var url = data.Sheet1[num].IMG_SRC;
                                //var url = "photo/submenu/buyuk/lounge2.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                                $('#title').text(data.Sheet1[num].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_lounge(i);
                  } //for loop ends here

                  for(var i=11; i<=18; i++){
                      function clickHandler_rest(num){
                        //For Eat 
                           $('#r'+i).click(function()
                           { 
                               $('#icon').hide();                               
                                var url = data.Sheet1[num].IMG_SRC;
                                //var url = "photo/submenu/buyuk/domino.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                                $('#title').text(data.Sheet1[num].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_rest(i);
                  } //for loop ends here

          }

          function display_ar(data)
          {

            console.log(data);

                  for(var i=3; i<=10; i++){
                      function clickHandler_eat(num){
                        //For Eat 
                           $('#c'+i).click(function()
                           {      
                               $('#icon').hide();                          
                                var url = data.Sheet1[num].IMG_SRC;
                               //photo/submenu/buyuk/cafe.png
                               // var url = "photo/submenu/buyuk/dunkin.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 80%"});
                               
                                    $('#title').text(data.Sheet1[num].NAME_LOCAL);
                                    $('#location').text("Location : "+data.Sheet1[num].ADDRESS_LOCAL);
                                    $('#desc').text(data.Sheet1[num].DETAIL_LOCAL);
                                    $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_eat(i);
                  } //for loop ends here

                  for(var i=0; i<=2; i++){
                      function clickHandler_lounge(num){
                        //For Eat 
                           $('#l'+i).click(function()
                           {
                               $('#icon').hide();                                
                                 var url = data.Sheet1[num].IMG_SRC;
                                //var url = "photo/submenu/buyuk/lounge2.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                                $('#title').text(data.Sheet1[num].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[num].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_lounge(i);
                  } //for loop ends here

                  for(var i=11; i<=18; i++){
                      function clickHandler_rest(num){
                        //For Eat 
                           $('#r'+i).click(function()
                           { 
                               $('#icon').hide();                               
                                var url = data.Sheet1[num].IMG_SRC;
                                //var url = "photo/submenu/buyuk/domino.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                                $('#title').text(data.Sheet1[num].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[num].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_rest(i);
                  } //for loop ends here

          }


            $.ajax({
              type: "GET",

              url: "https://api.myjson.com/bins/91xm1",
            
              dataType: "JSON",
              success: function(data) {
                display_ar(data);
                $('#change-us').click(function(event){
                    display(data);
                  });
                
                $('#change-ar').click(function(event){
                  display_ar(data);
                });
                // console.log(data);
                // console.log(data.Sheet1[1]);
             }                
        });

     });