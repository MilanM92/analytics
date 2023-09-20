function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DD2slyIxeN":
        Script1();
        break;
      case "6a0Qt5DtyOJ":
        Script2();
        break;
      case "6Z3Bzlm26uV":
        Script3();
        break;
      case "6XPsf1ByZif":
        Script4();
        break;
      case "5dFy3fpJcWH":
        Script5();
        break;
      case "5dniMNoF0Hr":
        Script6();
        break;
      case "5VDHjf8XWwC":
        Script7();
        break;
      case "6rTyi91iWBW":
        Script8();
        break;
      case "6LC66piOS2A":
        Script9();
        break;
      case "5sN70iQ6jMD":
        Script10();
        break;
      case "5aY4tRNA6kN":
        Script11();
        break;
      case "6Im1vZlNLku":
        Script12();
        break;
      case "6l6GTLXORm9":
        Script13();
        break;
      case "6gK4TrrAtTP":
        Script14();
        break;
      case "5sw4GqmmBVy":
        Script15();
        break;
      case "66K0QTEhYZU":
        Script16();
        break;
      case "6On0auBBbq5":
        Script17();
        break;
      case "63PRayPmLex":
        Script18();
        break;
      case "6aL0U9IotPp":
        Script19();
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
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'page_title': 'Slide2'
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
  'page_title': 'Slide2'
});
}

function Script4()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'page_title': 'Slide3'
});
}

function Script5()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script6()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script7()
{
  gtag('event', 'slide_title', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script8()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab3'});
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab2'});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab1'});
}

function Script11()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script12()
{
  ga('send', 'event', 'Button', 'click', 'Non-Work');
}

function Script13()
{
  ga('send', 'event', 'Button', 'click', 'Work-Related');
}

function Script14()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script15()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script16()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


}

function Script17()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script18()
{
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script19()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

