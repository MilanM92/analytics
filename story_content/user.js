function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6G5Me9w99uS":
        Script1();
        break;
      case "5iejkMftumT":
        Script2();
        break;
      case "6f84jfFago0":
        Script3();
        break;
      case "5kronbWLEby":
        Script4();
        break;
      case "6Xqjir9PPgy":
        Script5();
        break;
      case "6oGY80RiBNu":
        Script6();
        break;
      case "6DxL6tBaocB":
        Script7();
        break;
      case "6UYiuCLqsBB":
        Script8();
        break;
      case "5ti6edY2gX8":
        Script9();
        break;
      case "5kMHu39G5lE":
        Script10();
        break;
      case "5YOr4DC5A2n":
        Script11();
        break;
      case "5eeZE35nP1d":
        Script12();
        break;
      case "5pf9wGnqo5V":
        Script13();
        break;
      case "6ckd0ar8UBR":
        Script14();
        break;
      case "6Ob8W28JlQY":
        Script15();
        break;
      case "5uDEQZLB3TH":
        Script16();
        break;
      case "5Z0j4S34w6h":
        Script17();
        break;
      case "5x28ZVMG0Bj":
        Script18();
        break;
      case "6Dol95sjgGq":
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
gtag('send', 'screenview', {screenName: pagetitle});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('send', 'screenview', {screenName: pagetitle});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('send', 'screenview', {screenName: pagetitle});
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
  gtag('send', 'event', 'Question', 'incorrect', 'Question 1');


}

function Script8()
{
  gtag('send', 'event', 'Question', 'correct', 'Question 1');
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
gtag('send', 'screenview', {screenName: pagetitle});
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
  gtag('send', 'event', 'Question', 'incorrect', 'Question 2');


}

function Script12()
{
  gtag('send', 'event', 'Question', 'correct', 'Question 2');


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

