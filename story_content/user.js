function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5buCVbhEskB":
        Script1();
        break;
      case "66tSRukDOew":
        Script2();
        break;
      case "6Ar7FvQ5bmB":
        Script3();
        break;
      case "6T0WorGBAWc":
        Script4();
        break;
      case "6mMsVTsgUvB":
        Script5();
        break;
      case "65SrJUAkPd4":
        Script6();
        break;
      case "6qheH0e1DW0":
        Script7();
        break;
      case "6YqzLslGyZM":
        Script8();
        break;
      case "5up6Eb01VbS":
        Script9();
        break;
      case "6jdbXwMtcTH":
        Script10();
        break;
      case "5u96ouu35JX":
        Script11();
        break;
      case "5bt2WegPWS2":
        Script12();
        break;
      case "5Uy9T0sx17Q":
        Script13();
        break;
      case "6mdGvNxCsns":
        Script14();
        break;
      case "6dKnwOZ51qt":
        Script15();
        break;
      case "6Z9uBC2Xzzw":
        Script16();
        break;
      case "5oP9HjEeyyG":
        Script17();
        break;
      case "5uxvcKYr6oS":
        Script18();
        break;
      case "6fBM4LBQfGg":
        Script19();
        break;
      case "6TkrWLaZqb5":
        Script20();
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
  let el= document.querySelector("[data-acc-text='START']");
el.classList.add('new-class-name');
}

function Script4()
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

function Script5()
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

function Script6()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 1’);


}

function Script7()
{
  gtag(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 1’);
}

function Script8()
{
  gtag('event', 'slide_title', {
  'app_name': 'myAppName',
  'page_title': 'Slide1'
});
}

function Script9()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab3'});
}

function Script10()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab2'});
}

function Script11()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

//Send PageTitle to Analytics
ga('send', 'screenview', {screenName: 'Slide4_Tab1'});
}

function Script12()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script13()
{
  ga('send', 'event', 'Button', 'click', 'Non-Work');
}

function Script14()
{
  ga('send', 'event', 'Button', 'click', 'Work-Related');
}

function Script15()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script16()
{
  ga(‘send’, ‘event’, ‘Question’, ‘incorrect’, ‘Question 3’);


}

function Script17()
{
  ga(‘send’, ‘event’, ‘Question’, ‘correct’, ‘Question 3’);


}

function Script18()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

function Script19()
{
  ga(‘send’, ‘event’, ‘Result’, ‘completed’);


}

function Script20()
{
  //Get Var Pagetitle from Storyline
var player = GetPlayer();
var pagetitle = player.GetVar(“PageTitle”);

//Send PageTitle to Analytics
ga(‘send’, ‘screenview’, {screenName: pagetitle});
}

