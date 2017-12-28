//*******************************************************************************
//FURO-D Contents Templage JS : 2016.02.02

//Comment : (1) Contents 정리.
//(2)
//(3)  
//*******************************************************************************




//window.external.ChangeLanguage("english");
//ChangeLanguage("en");
//SetVolume(0.7);
//------------------------------------------------------------------------------
//Service Contents Call : Main Screen에서 선택한 Service Contents를 호출함.
//------------------------------------------------------------------------------
function FC_ContentsCall(strContentsName, strLanguage)
{
	//window.external.PlayBehavior("Yes01");
	//[퓨처로봇 소개 서비스]---
	

// 	if(strContentsName == "sanseo-advantage")   
// 	{
		
// 		if(strLanguage=="En") { PlaySpeech("Sanseo Advantage");  }
		
// 		location.href = "Contents/sanseo-advantage/sanseo-advantage.htm";
// 	}

// if(strContentsName == "ExpertSaying")   
// 	{
		
// 		//if(strLanguage=="En") { PlaySpeech("Welcome to Amegan Quiz.");  }
		
// 		location.href = "Contents/ExpertSaying/ExpertSaying.htm";
// 	}
// 	if(strContentsName == "TryIt")   
// 	{
		
// 		if(strLanguage=="En") { //PlaySpeech("Sanseo Advantage");  
// 	}
		
// 		location.href = "Contents/TryIt/TryIt.htm";
// 	}

   
	// if(strContentsName == "RobotAvatar")   
	// {
		
	// 	//if(strLanguage=="Kr") { PlaySpeech('로봇 얼굴에 내 얼굴을 넣어보세요.');  }
	// 	//if(strLanguage=="En") { PlaySpeech('Try replacing robot avatar with your face.');  }
	// 	//if(strLanguage=="Cn") { PlaySpeech('试着用你的脸替换的机器人化身。');  }
	// 	//if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
	// 	location.href = "Contents/RobotAvatar/index.htm";
	// }

	//[포토 프린트 서비스]---
	if(strContentsName == "eat")   
	{
		// if(strLanguage=="Kr") { PlaySpeech("사진을 촬영하고 인쇄해 드립니다.");  }
		// if(strLanguage=="En") { PlaySpeech("Try to take your photo and print.");  }
		// if(strLanguage=="Cn") { PlaySpeech("尽量把你的照片和打印。"); }
		// if(strLanguage=="Jp") { PlaySpeech("あなたの写真や印刷を取るようにしてください。");  }
		location.href = "Contents/eat/index.htm";
	}

	if(strContentsName == "shop")
	{
		location.href = "Contents/shop/index.htm";
	}

	if(strContentsName == "info")
	{
		location.href = "Contents/info/index.htm";
	}

	if(strContentsName == "TerminalMap")
	{
		location.href = "Contents/TerminalMap/index.htm";
	}
	if(strContentsName == "selfie")
	{
		location.href = "Contents/sefie/index.htm";
	}

	if(strContentsName == "share")
	{
		location.href = "Contents/share/index.htm";
	}

	if(strContentsName == "Flights")
	{
		location.href = "Contents/Flights/index.htm";
	}

	if(strContentsName == "BoardingPass")
	{
		location.href = "Contents/BoardingPass/index.htm";
	}
	if(strContentsName == "sub_flights"){
		location.href = "../Flights/index.htm"
	}
	if(strContentsName == "sub_boardingpass"){
		location.href = "../BoardingPass/index.htm"
	}
	if(strContentsName == "sub_terminalmap"){
		location.href = "../TerminalMap/index.htm"
	}


	if(strContentsName == "RobotAvatar")   
	{
		
		//if(strLanguage=="Kr") { PlaySpeech('로봇 얼굴에 내 얼굴을 넣어보세요.');  }
		//if(strLanguage=="En") { PlaySpeech('Try replacing robot avatar with your face.');  }
		//if(strLanguage=="Cn") { PlaySpeech('试着用你的脸替换的机器人化身。');  }
		//if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
		location.href = "Contents/RobotAvatar/index.htm";
	}

	//[포토 프린트 서비스]---
	if(strContentsName == "PhotoPrinting")   
	{
		if(strLanguage=="Kr") { PlaySpeech("사진을 촬영하고 인쇄해 드립니다.");  }
		if(strLanguage=="En") { PlaySpeech("Try to take your photo and print.");  }
		if(strLanguage=="Cn") { PlaySpeech("尽量把你的照片和打印。"); }
		if(strLanguage=="Jp") { PlaySpeech("あなたの写真や印刷を取るようにしてください。");  }
		location.href = "Contents/PhotoPrinting/PhotoPrinting.htm";
	}

	// if(strContentsName == "check")   
	// {
	// 	if(strLanguage=="Kr") { PlaySpeech("사진을 촬영하고 인쇄해 드립니다.");  }
	// 	if(strLanguage=="En") { PlaySpeech("Try to take your photo and print.");  }
	// 	if(strLanguage=="Cn") { PlaySpeech("尽量把你的照片和打印。"); }
	// 	if(strLanguage=="Jp") { PlaySpeech("あなたの写真や印刷を取るようにしてください。");  }
	// //	location.href = "Contents/PhotoPrinting/PhotoPrinting.htm";
	// }

	// //[음성인식 서비스]---
	// if(strContentsName == "VoiceRecognition")   
	// {
	// 	if(strLanguage=="Kr") { PlaySpeech('음성인식 서비스 입니다.');  }
	// 	if(strLanguage=="En") { PlaySpeech('This is for multi-language voice recognition service.');  }
	// 	if(strLanguage=="Cn") { PlaySpeech('这是为多语言语音识别服务。');  }
	// 	if(strLanguage=="Jp") { PlaySpeech('これは、多言語音声認識サービスのためのものである。');  }
	// 	location.href = "Contents/voiceRecognition/voiceRecognition.htm";
	// }

	// //[로봇제어 서비스]---
	// if(strContentsName == "RobotRemote")   
	// {
	// 	if(strLanguage=="Kr") { PlaySpeech('로봇 원격 조정 서비스 입니다.');  }
	// 	if(strLanguage=="En") { PlaySpeech('This is for Robot Remote control service.');  }
	// 	if(strLanguage=="Cn") { PlaySpeech('这是机器人远程控制服务。');  }
	// 	if(strLanguage=="Jp") { PlaySpeech('これはロボットのリモートコントロールサービス用です。');  }
	// 	location.href = "Contents/Rms/Rms.htm";
	// }

	//[음성인식 서비스]---
	if(strContentsName == "RobotDance")   
	{
		//if(strLanguage=="Kr") { PlaySpeech('로봇 댄스 입니다.');  }
		//if(strLanguage=="En") { PlaySpeech('This is for introducing robot dance service.');  }
		//if(strLanguage=="Cn") { PlaySpeech('这是用于将机器人舞蹈服务。');  }
		//if(strLanguage=="Jp") { PlaySpeech('これは、ロボットダンスのサービスを導入するためである。');  }
		location.href = "Contents/RobotDance/RobotDance.htm";
	}
	if(strContentsName == "ThingsToDo")   
	{
		location.href = "Contents/thingstodo/index.htm";
	}
	

}

function GoHome()
{
	//if(flagPictureAvatar == "true")	DeleteRobotFace();	//사진 아바타 삭제
	location.href = "../../maincontents.htm";
}

//------------------------------------------------------------
//Language Change. : Kr, En, Cn, Jp 
//------------------------------------------------------------
function FC_ChangeLanguage(strLanguage)
{
	ChangeLanguage("english");
	writeCookie("CurrentLanguage", "english", 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.
//------------------------------------------------------------------------------
function FC_ChangeAdMovie(strIdx)
{
	writeCookie("CurrentMovie", strIdx, 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	var tmpIdx = readCookie("CurrentMovie");	
	video(tmpIdx);
	FC_ChangeAdMovieHtml(tmpIdx);
}


//------------------------------------------------------------------------------
//Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	return readCookie("CurrentLanguage");
}

//------------------------------------------------------------------------------
//FC_LoadConfigView : 관리자 설정 페이지로 이동함.
//------------------------------------------------------------------------------
function FC_LoadConfigView()
{
	location.href = "Config/Config.htm";
}

function OnUserApproached()
{	
	window.external.RobotDanceStart(false);
	SetVolume(0.7);
	PlaySpeech("Welcome to the Little Rock and the Clinton National Airport");
	PlaySpeech("press a button on my screen to begin");
}

function OnUserDisappeared()
{
	//setTimeout(dancing(),60000);
	function dancing(){
		//window.external.RobotDanceStart(true);
	}
	/*var ran = Math.random()*3;
	var langCnt = Math.floor(ran);

	FC_ChangeLanguage("english");
	if(langCnt == 1 )	    PlaySpeech("Please, don't go away.");
	else if(langCnt == 2 )	PlaySpeech("Bye bye.");
	else if(langCnt == 3 )	PlaySpeech("Where you go?");
	else if(langCnt == 4 )  PlaySpeech("I miss you.");

	window.external.StartFaceTracking(false);
	//location.href = "IdlePage/IdlePage.htm";*/
}




//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
var CookieDay = 30;			//save duration.(Unity : Day)
function writeCookie(name, value, days)
{
	var expires = "";
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for (var i=0; i<cookies.length; i++) 
	{
		var c = cookies[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
			return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name)
{
	//erase particular cookie
	writeCookie(name, "", -1); //소멸일자 (-1일)를 소멸시켜 쿠키를 삭제함
}
//-[End Cookie Control]------------------------------------------------------//

      $(document).ready(function(){
              //Change to English
              //$('#change-us').click(function(){
                
                $('#change-ar').css("background", "#f8f8f8");
                $('#change-fr').css("background", "#f8f8f8");
                $('#change-sp').css("background", "#f8f8f8");
                $('#change-ch').css("background", "#f8f8f8");
                $('#change-ko').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");
                $('#content_term').text("Terminal A");
                $('#content_air').text("Riyadh Airport");
                $('#content_fly').text("New Flights");
                $('#content_eat').text("Dine & Shop");
                $('#content_shop').text("Concourse Renovation");
                $('#content_info').text("Holiday Travel Tips");
                $('#content_dance').text("DANCE");
                $('#content_selfie').text("SELFIE");
                $('#content_share').text("SHARE");
                $('#content_explore').text("Explore our concessions");
              
              //});

              //Change to Arabic
              $('#change-ar').click(function(){
                
                $('#change-us').css("background", "#f8f8f8");
                $('#change-fr').css("background", "#f8f8f8");
                $('#change-sp').css("background", "#f8f8f8");
                $('#change-ch').css("background", "#f8f8f8");
                $('#change-ko').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");

                $('#content_term').text("محطة A");
                $('#content_air').text("مطار الرياض");
                $('#content_fly').text("ملاح");
                $('#content_eat').text("تأكل");
                $('#content_shop').text("متجر");
                $('#content_info').text("معلومات");
                $('#content_dance').text("رقص");
                $('#content_selfie').text("تصوير");
                $('#content_share').text("شارك");
                $('#content_explore').text("استكشاف تنازلات لدينا");
              });

              //Change to French
              $('#change-fr').click(function(){

                
                $('#change-us').css("background", "#f8f8f8");
                $('#change-ar').css("background", "#f8f8f8");
                $('#change-sp').css("background", "#f8f8f8");
                $('#change-ch').css("background", "#f8f8f8");
                $('#change-ko').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");


                $('#content_term').text("Terminal A");
                $('#content_air').text("Aéroport de Riyadh");
                $('#content_fly').text("Nouveaux vols");
                $('#content_eat').text("MANGER");
                $('#content_shop').text("BOUTIQUE");
                $('#content_info').text("INFO");
                $('#content_dance').text("DANSE");
                $('#content_selfie').text("SELFIE");
                $('#content_share').text("PARTAGER");
                $('#content_explore').text("Explorez nos concessions");
              });

              //Change to Spain
              $('#change-sp').click(function(){
                
                $('#change-us').css("background", "#f8f8f8");
                $('#change-fr').css("background", "#f8f8f8");
                $('#change-ar').css("background", "#f8f8f8");
                $('#change-ch').css("background", "#f8f8f8");
                $('#change-ko').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");


                $('#content_term').text("Terminal A");
                $('#content_air').text("AEROPUERTO DE RIYADH");
                $('#content_fly').text("NUEVOS VUELOS");
                $('#content_eat').text("COMER");
                $('#content_shop').text("TIENDA");
                $('#content_info').text("INFO");
                $('#content_dance').text("BAILE");
                $('#content_selfie').text("SELFIE");
                $('#content_share').text("COMPARTIR");
                $('#content_explore').text("EXPLORE NUESTRAS CONCESIONES");
              });

              //Change to Chinese
              $('#change-ch').click(function(){
                
                $('#change-us').css("background", "#f8f8f8");
                $('#change-fr').css("background", "#f8f8f8");
                $('#change-sp').css("background", "#f8f8f8");
                $('#change-ar').css("background", "#f8f8f8");
                $('#change-ko').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");


                $('#content_term').text("终端A");
                $('#content_air').text("RIYADH机场");
                $('#content_fly').text("新的飞机");
                $('#content_eat').text("吃");
                $('#content_shop').text("店");
                $('#content_info').text("信息");
                $('#content_dance').text("舞蹈");
                $('#content_selfie').text("自拍");
                $('#content_share').text("分享");
                $('#content_explore').text("探索我们的想法");
              });

              //Change to Korean
              $('#change-ko').click(function(){

                
                $('#change-us').css("background", "#f8f8f8");
                $('#change-fr').css("background", "#f8f8f8");
                $('#change-sp').css("background", "#f8f8f8");
                $('#change-ch').css("background", "#f8f8f8");
                $('#change-ar').css("background", "#f8f8f8");

                $(this).css("background", "#e7e7e7");


                $('#content_term').text("터미널 A");
                $('#content_air').text("리야드 에어 포트");
                $('#content_fly').text("새로운 항공편");
                $('#content_eat').text("먹다");
                $('#content_shop').text("가게");
                $('#content_info').text("정보");
                $('#content_dance').text("댄스");
                $('#content_selfie').text("사진");
                $('#content_share').text("몫");
                $('#content_explore').text("우리의 역량을 발휘하십시오");
              });
          });
