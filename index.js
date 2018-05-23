function takeANumber(s,n)
{
  
    s.push(n)
    return s.indexOf(n)
}

function nowServing(s)
{
  if (s.length <1)
  {
    return "There is nobody waiting to be served!"
  }
  else 
  {
    var m=s[0];
    s.unshift()
    return  "Currently serving "+ m +"."
  }
    
    
}

function currentLine(s)
{
  if (s.length <1)
  {
    return "The line is currently empty."
  }
  else 
  {
    var m=s[0];
    s.unshift()
    return  "Currently serving "+ m +"."
  }
    
    
}