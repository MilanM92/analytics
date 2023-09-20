function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oPVNy7JsGI":
        Script1();
        break;
      case "6DylH942S8k":
        Script2();
        break;
      case "5yBmbaIrS4Q":
        Script3();
        break;
      case "6kLHb5asRRi":
        Script4();
        break;
      case "5t3UvwqiLxh":
        Script5();
        break;
      case "6CPEqYvLpxx":
        Script6();
        break;
      case "6pybWDjU8iJ":
        Script7();
        break;
      case "6fnoNxa4Opm":
        Script8();
        break;
      case "6lKMETSL1oe":
        Script9();
        break;
      case "6A0QKxKDSNk":
        Script10();
        break;
      case "6VCvnTYQLX1":
        Script11();
        break;
      case "5rWHmVpUuWO":
        Script12();
        break;
      case "6Ae1sA8mRUX":
        Script13();
        break;
      case "6NQh5qH3pga":
        Script14();
        break;
      case "6rieKHi92Ur":
        Script15();
        break;
      case "5zdAXLtn8Sm":
        Script16();
        break;
      case "6lINpM1k50F":
        Script17();
        break;
      case "69pPsVxY93H":
        Script18();
        break;
      case "68hEMYKLSYn":
        Script19();
        break;
      case "69MOM6kH9w2":
        Script20();
        break;
      case "6QtbBPQOC23":
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
gtag('event', 'page_view', {
  'app_name': 'myAppName',
  'screen_name': 'Slide1'
});
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

