  $(document).ready(function() {
                   
           //Change to English
              //$('#change-us').click(function(){
               
                $('.titl1').text("LaGuardia Airport Shop page");
                $('#txt1').text("Here you can discover all of our retail and shopping options, and where they are located.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#market').text("Market");
                $('#shop').text("Shops");
   
              //});

              //Change to Arabic
              $('#change-ar').click(function(){
                
                $('.titl1').text("مطار الرياض صفحة العرض");
                $('#txt1').text("هنا يمكنك اكتشاف كل من خيارات الطعام والشراب، حيث أنها تقع، وما هو على القائمة.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#market').text("سوق");
                $('#shop').text("محلات");

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

                  for(var i=0; i<=6; i++){
                      function clickHandler_shop(num){
                        //For Eat 
                        $('#s'+i).text(data.Sheet1[num].NAME_BASE); 
                           $('#s'+i).click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[num].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 53%"});
                                $('#title').text(data.Sheet1[num].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[num].DETAIL_BASE);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_shop(i);
                  } //for loop ends here

                   
                        //For Eat 
                        $('#s0').text(data.Sheet1[0].NAME_BASE); 
                           $('#s0').click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[0].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                               $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 127%"});
                                $('#title').text(data.Sheet1[0].NAME_BASE);
                                $('#location').text("Location : "+data.Sheet1[0].ADDRESS_BASE);
                                $('#desc').text(data.Sheet1[0].DETAIL_BASE);
                                $("#btn").show();
                              });
                         
          }


          function display_ar(data)
          {

            console.log(data);

                  for(var i=0; i<=6; i++){
                      function clickHandler_shop(num){
                        //For Eat 
                        $('#s'+i).text(data.Sheet1[num].NAME_LOCAL); 
                           $('#s'+i).click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[num].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                                $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 53%"});
                                $('#title').text(data.Sheet1[num].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[num].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[num].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         }//clickhandler ends here
                         clickHandler_shop(i);
                  } //for loop ends here

                   
                        //For Eat 
                        $('#s0').text(data.Sheet1[0].NAME_LOCAL); 
                           $('#s0').click(function()
                           {      

                               $('#icon').hide();                          
                               var url = data.Sheet1[0].IMG_SRC;
                               //var url = "photo/submenu/buyuk/kingdom.jpg";
                               $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 127%"});
                                $('#title').text(data.Sheet1[0].NAME_LOCAL);
                                $('#location').text("Location : "+data.Sheet1[0].ADDRESS_LOCAL);
                                $('#desc').text(data.Sheet1[0].DETAIL_LOCAL);
                                $("#btn").show();
                              });
                         
          }

            $.ajax({
              type: "GET",

              url: "https://api.myjson.com/bins/c7j49",
            
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