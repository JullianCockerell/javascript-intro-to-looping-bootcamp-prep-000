function whileLoop(number)
{
  while(number > 0)
  {
    console.log(number);
    number = number - 1;
  }
  return 'done';
}

function forLoop(array)
{
  for(var i = 1; i < 26; i++)
  {
    if(i === 1)
    {
      array.push(`I am ${i} strange loop.`);
    }
    else
    {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function doWhileLoop(array)
{
  do
  {
    array.pop();
  } while(maybeTrue() && array.length > 0);
}

function maybeTrue() 
{
  return Math.random() >= 0.5;
}


