function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GiTxrSu59a":
        Script1();
        break;
      case "6cKpjTUo7oB":
        Script2();
        break;
  }
}

function Script1()
{
  const paths = [...document.getElementsByTagName('path')]
paths[92].classList.add('Start')
console.log(paths)
}

function Script2()
{
  const paths = [...document.getElementsByTagName('path')]
paths[94].classList.add('Next')
console.log(paths)
}

