function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YBjWFyTvSR":
        Script1();
        break;
  }
}

function Script1()
{
  const paths = [...document.getElementsByTagName('path')]
paths[92].classList.add('Start')
console.log(paths[92])
}

