function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fp95ysfURb":
        Script1();
        break;
      case "5uq6vRxQlWY":
        Script2();
        break;
      case "5wmH3grfPAl":
        Script3();
        break;
      case "6ZO2LfusNYe":
        Script4();
        break;
      case "6oJW1jFXfDn":
        Script5();
        break;
      case "6IJHWd2EFJi":
        Script6();
        break;
      case "5x7JRtsWzZT":
        Script7();
        break;
      case "5qJO4o8splG":
        Script8();
        break;
      case "5klYogQSWbW":
        Script9();
        break;
      case "6VqrBA1pwH1":
        Script10();
        break;
      case "5gQAcdpM5y1":
        Script11();
        break;
      case "63L04TuKzkx":
        Script12();
        break;
      case "6DJeiKOr3cd":
        Script13();
        break;
      case "5h7bbIAdidx":
        Script14();
        break;
      case "6I59tmXc1jo":
        Script15();
        break;
      case "6rQ0JIwqjIo":
        Script16();
        break;
      case "5q4auNyMOEo":
        Script17();
        break;
      case "6YwwAaVkyMl":
        Script18();
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
  'page_name': 'Slide1'
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
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'page_name': 'Slide1'
});
}

function Script4()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script5()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script6()
{
  gtag('event', 'slide_title', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script7()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab3'});
}

function Script8()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab2'});
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab1'});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script11()
{
  ga('send', 'event', 'Button', 'click', 'Non-Work');
}

function Script12()
{
  ga('send', 'event', 'Button', 'click', 'Work-Related');
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
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script15()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


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
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script18()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

