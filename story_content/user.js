function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JQhhThIebd":
        Script1();
        break;
      case "64vLVqpZpNs":
        Script2();
        break;
      case "6EPGmWE0A90":
        Script3();
        break;
      case "6OGx6tStbWO":
        Script4();
        break;
      case "5oIeTRCb5je":
        Script5();
        break;
      case "5msupnYS25y":
        Script6();
        break;
      case "5WasUkiT97P":
        Script7();
        break;
      case "6JZcmhv5zPh":
        Script8();
        break;
      case "6DvcaiBxXO6":
        Script9();
        break;
      case "6CcmHe2zaPc":
        Script10();
        break;
      case "6eHBYDr8DsL":
        Script11();
        break;
      case "5sc9GV32aWG":
        Script12();
        break;
      case "6oKQQRDZF5t":
        Script13();
        break;
      case "6BxQDrzJ5Uy":
        Script14();
        break;
      case "5dl6qQuI52h":
        Script15();
        break;
      case "6nR6sgD6esT":
        Script16();
        break;
      case "6LpMNdjFheC":
        Script17();
        break;
      case "6JHoZiVxxVX":
        Script18();
        break;
      case "5iTpsSHwWCD":
        Script19();
        break;
      case "5o1OJUzTm4H":
        Script20();
        break;
      case "6MGSF10sbg7":
        Script21();
        break;
      case "6SEHrbsFXxI":
        Script22();
        break;
      case "6IhemKvUcRW":
        Script23();
        break;
      case "6Gd871O44ng":
        Script24();
        break;
  }
}

function Script1()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide1'});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide2'});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide3'});
}

function Script4()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 01’);’
}

function Script5()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 02’);’
}

function Script6()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 03’);’
}

function Script7()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script8()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4'});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab3'});
}

function Script11()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab2'});
}

function Script12()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab1'});
}

function Script13()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script14()
{
  ga('send', 'event', 'Question', 'incorrect', 'Question 2');
}

function Script15()
{
  ga('send', 'event', 'Question', 'correct', 'Question 2');


}

function Script16()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script17()
{
  ga('send', 'event', 'Button', 'click', 'Non-Work');
}

function Script18()
{
  ga('send', 'event', 'Button', 'click', 'Work-Related');
}

function Script19()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script20()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script21()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


}

function Script22()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script23()
{
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script24()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

