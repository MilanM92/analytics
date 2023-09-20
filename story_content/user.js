function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fJ25ajlYNy":
        Script1();
        break;
      case "5fPVpt7IVCX":
        Script2();
        break;
      case "5spz109QWCz":
        Script3();
        break;
      case "6PXeqeWMW3s":
        Script4();
        break;
      case "5xQE0LO6oE7":
        Script5();
        break;
      case "6PC5WHtEwuo":
        Script6();
        break;
      case "5ubrxvEwjG1":
        Script7();
        break;
      case "6MWQoeKo0QG":
        Script8();
        break;
      case "5zsAJ3QbJ3o":
        Script9();
        break;
      case "5mZpHWAQ82t":
        Script10();
        break;
      case "6DQKs7DfUkG":
        Script11();
        break;
      case "5t3y4VFiZNc":
        Script12();
        break;
      case "686ABEHoTex":
        Script13();
        break;
      case "5jqQ7suwaGa":
        Script14();
        break;
      case "5qm2RCtOp9b":
        Script15();
        break;
      case "5ahjytMPCdY":
        Script16();
        break;
      case "6UQvnRMg9LA":
        Script17();
        break;
      case "6Ht4o52GoDz":
        Script18();
        break;
      case "6fmPxrV9Tnb":
        Script19();
        break;
      case "6Ik1HHYGSPp":
        Script20();
        break;
      case "5vBRUyTjSTR":
        Script21();
        break;
      case "6Ux5txTIzpQ":
        Script22();
        break;
      case "6L1T156exdb":
        Script23();
        break;
      case "64GVPrM2CB8":
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
gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script2()
{
  gtag('config', 'G-SRFJ3W9S0F', {
  'page_title': 'Travel Destinations',
  'currency': 'USD'
});
}

function Script3()
{
  gtag('config', 'G-SRFJ3W9S0F', {
  'page_title': 'Travel Destinations',
  'currency': 'USD'
});
}

function Script4()
{
  gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'screen_name': 'Home12'
});
}

function Script5()
{
  gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script6()
{
  gtag('event', 'slide_title', {
  'app_name': 'myAppName',
  'page_title': 'Slide2'
});
}

function Script7()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 01’);’
}

function Script8()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 02’);’
}

function Script9()
{
  ga(‘send’, ‘event’, ‘Button’, ‘click’, ‘Tab 03’);’
}

function Script10()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script11()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script12()
{
  gtag('event', 'slide_title', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script13()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab3'});
}

function Script14()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab2'});
}

function Script15()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab1'});
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

