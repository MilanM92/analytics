function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5unFjmvld9y":
        Script1();
        break;
      case "6JAwMYJPjfB":
        Script2();
        break;
      case "6q2V3WUvXBF":
        Script3();
        break;
      case "6TKhGh19vr9":
        Script4();
        break;
      case "6QKYNw3nIbU":
        Script5();
        break;
      case "5ZEoFZP2wsJ":
        Script6();
        break;
      case "6B6rhZXg93R":
        Script7();
        break;
      case "60i7v7W41SR":
        Script8();
        break;
      case "6M6swdhdU0W":
        Script9();
        break;
      case "6Y83SrTqRnC":
        Script10();
        break;
      case "6cRQaDBNNMk":
        Script11();
        break;
      case "5diACYNbnrj":
        Script12();
        break;
      case "6gdl6cInoIz":
        Script13();
        break;
      case "6bSusoXijPj":
        Script14();
        break;
      case "5wYs2bbzK5b":
        Script15();
        break;
      case "5lxkWK4Gt1H":
        Script16();
        break;
      case "5uaRoe24L6l":
        Script17();
        break;
      case "5kYYIE0Uh6n":
        Script18();
        break;
      case "6dBaI2ujqzd":
        Script19();
        break;
      case "5nsunFo39Fm":
        Script20();
        break;
      case "6Q4fw9I1aiM":
        Script21();
        break;
      case "5dd59fX8VYh":
        Script22();
        break;
      case "6gPkijdMVBY":
        Script23();
        break;
      case "5bekm01sZ2Z":
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

