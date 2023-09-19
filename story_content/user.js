function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UHOYwuxAJ1":
        Script1();
        break;
      case "5mseJErlMvD":
        Script2();
        break;
      case "6PKOFGTbhKS":
        Script3();
        break;
      case "60JidAoV6sq":
        Script4();
        break;
      case "6fQloLd7Q8k":
        Script5();
        break;
      case "6YQMNrb3Lwr":
        Script6();
        break;
      case "5jiC9tQOMxl":
        Script7();
        break;
      case "6iitaIadrpi":
        Script8();
        break;
      case "6niFXHFRpf8":
        Script9();
        break;
      case "5rlSeu4PmFk":
        Script10();
        break;
      case "5qaJyiYCCWV":
        Script11();
        break;
      case "6Xg96zHnfN8":
        Script12();
        break;
      case "6ME74uHB9DU":
        Script13();
        break;
      case "6nsprQn0m6t":
        Script14();
        break;
      case "5moxnCYBCsU":
        Script15();
        break;
      case "5bTnvtZsQ4O":
        Script16();
        break;
      case "6Ws8wSTcZTz":
        Script17();
        break;
      case "6l3i2dLfsxy":
        Script18();
        break;
      case "60MeKT64Pkv":
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
ga('send', 'screenview', {screenName: pagetitle});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
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
  ga('send', 'event', 'Question', 'incorrect', 'Question 1');


}

function Script8()
{
  ga('send', 'event', 'Question', 'correct', 'Question 1');
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: pagetitle});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('send', 'screenview', {screenName: pagetitle});
}

function Script11()
{
  ga('send', 'event', 'Question', 'incorrect', 'Question 2');


}

function Script12()
{
  ga('send', 'event', 'Question', 'correct', 'Question 2');


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

