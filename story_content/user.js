function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69bLIhxIMm6":
        Script1();
        break;
      case "6hFXitaxzqv":
        Script2();
        break;
      case "6014ft1TCTC":
        Script3();
        break;
      case "686zsf9CQZv":
        Script4();
        break;
      case "6e2H2OUuS7K":
        Script5();
        break;
      case "6ObwEYgTIlX":
        Script6();
        break;
      case "6kKrwNUg54O":
        Script7();
        break;
      case "5YWW2coyISD":
        Script8();
        break;
      case "5ZhmPXqMksc":
        Script9();
        break;
      case "6P8foQSSvIP":
        Script10();
        break;
      case "64lCmAIsoO6":
        Script11();
        break;
      case "6FoxMXMAXd4":
        Script12();
        break;
      case "6k0jxLYJBzH":
        Script13();
        break;
      case "6ChuFVddNoA":
        Script14();
        break;
      case "6SgiRtQ7oH2":
        Script15();
        break;
      case "6Bj4NeUmm3Q":
        Script16();
        break;
      case "5lTehOkLTMJ":
        Script17();
        break;
      case "5Y2f0iNyzqM":
        Script18();
        break;
      case "6La1Ybxv3IG":
        Script19();
        break;
      case "6p7lVfXO8fD":
        Script20();
        break;
      case "5yNWUkfVPrl":
        Script21();
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
  ga('send', 'event', 'Button', 'click', 'Non-Work');
}

function Script15()
{
  ga('send', 'event', 'Button', 'click', 'Work-Related');
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
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script18()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


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
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script21()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

