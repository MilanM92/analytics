function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mW9TqKQTXe":
        Script1();
        break;
      case "6kEEnBdkgMV":
        Script2();
        break;
      case "6R8C7FJMWpu":
        Script3();
        break;
      case "6gJDWMC2RiQ":
        Script4();
        break;
      case "5ghPUOHWcQ3":
        Script5();
        break;
      case "6pKWGuhOzWn":
        Script6();
        break;
      case "5qH9dzeg5hP":
        Script7();
        break;
      case "6eeUstFbf1r":
        Script8();
        break;
      case "5liNR8IrZTS":
        Script9();
        break;
      case "5lKZVSsfbTv":
        Script10();
        break;
      case "6jB5flYORxU":
        Script11();
        break;
      case "6LMGb1rHYsA":
        Script12();
        break;
      case "5cySHtVhnzc":
        Script13();
        break;
      case "6aFOAUG5sgt":
        Script14();
        break;
      case "66190nlvJUB":
        Script15();
        break;
      case "5jW1BFafN1Q":
        Script16();
        break;
      case "6CnGm4wSneg":
        Script17();
        break;
      case "6irsNrmK4k0":
        Script18();
        break;
      case "6qScxEEhTnJ":
        Script19();
        break;
      case "6K2JxnwQ3YF":
        Script20();
        break;
      case "60f4n5MJv59":
        Script21();
        break;
      case "5qMZ9t4EkpV":
        Script22();
        break;
      case "6dysyFIWHVi":
        Script23();
        break;
      case "6b0Gi7bZMwq":
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
  'screen_name': 'Home'
});
}

function Script6()
{
  gtag('event', 'screen_view', {
  'app_name': 'myAppName',
  'screen_name': 'Home'
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
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4'});
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

