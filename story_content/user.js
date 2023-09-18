function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ANzjbNb0KZ":
        Script1();
        break;
      case "678jKWqZ21R":
        Script2();
        break;
      case "6gDHaLcjZls":
        Script3();
        break;
      case "6h0f5yFTWXk":
        Script4();
        break;
      case "5tOyQzrspTl":
        Script5();
        break;
      case "67rPL7wCQGK":
        Script6();
        break;
      case "5h3gZBnxbpF":
        Script7();
        break;
      case "5zBGLQXnaya":
        Script8();
        break;
      case "64PlC7tWBgh":
        Script9();
        break;
      case "6LGniypf459":
        Script10();
        break;
      case "5gVavYKGJqq":
        Script11();
        break;
      case "6ODuOfiLKul":
        Script12();
        break;
      case "5r29K2jVh7H":
        Script13();
        break;
      case "5iV4kJTcpDv":
        Script14();
        break;
      case "6LIBgIcamhb":
        Script15();
        break;
      case "6fOo7tFoQUg":
        Script16();
        break;
      case "6LxAKZFZqbh":
        Script17();
        break;
      case "6ddHdpNnHx6":
        Script18();
        break;
      case "5rJb7rfwHen":
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
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script2()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script3()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
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
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script8()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
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

