function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IGaEB40a7L":
        Script1();
        break;
      case "5UnaDUxN0rd":
        Script2();
        break;
      case "6GjpDLVLtec":
        Script3();
        break;
      case "6nl7P1zUVsK":
        Script4();
        break;
      case "65qanNPwxyO":
        Script5();
        break;
      case "6HZNKBguKI7":
        Script6();
        break;
      case "5n9xghP3jGq":
        Script7();
        break;
      case "66V2mYd9i6P":
        Script8();
        break;
      case "6PFoj4M4o6E":
        Script9();
        break;
      case "5thYpZvJD7U":
        Script10();
        break;
      case "5Wne0Aqnv24":
        Script11();
        break;
      case "5W9PjakncdH":
        Script12();
        break;
      case "6ecGQSkM6YU":
        Script13();
        break;
      case "62x4peKoFFN":
        Script14();
        break;
      case "6JWQTIhNqnP":
        Script15();
        break;
      case "6kAvf1mporE":
        Script16();
        break;
      case "5X0JEJzNb8C":
        Script17();
        break;
      case "6Ihv4SBN7yv":
        Script18();
        break;
      case "6Zu05JFKAD6":
        Script19();
        break;
  }
}

function Script1()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
gtag(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
gtag(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
gtag(‘send’, ‘screenview’, {screenName: pagetitle});
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
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
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
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 2’);


}

function Script12()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 2’);


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

