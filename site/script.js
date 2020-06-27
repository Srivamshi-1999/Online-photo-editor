var image=null;
var imginp=null;
var canimg=null;
function upload()
{
  canimg=document.getElementById("can1");
  imginp=document.getElementById("fginput");
  image=new SimpleImage(imginp);
  image.drawTo(canimg);
}
function greyscale()
{
 for(var pixel of image.values())
   {
     var x=pixel.getRed();
     var y=pixel.getGreen();
     var z=pixel.getBlue();
     var avg=x+y+z/3;
     pixel.setRed(avg);
     pixel.setBlue(avg);
     pixel.setGreen(avg);
     
   }
  image.drawTo(canimg);
  
}
function reset()
{
  var y=upload();
  y.drawTo(canimg);
}

function rainbow()
{
  var w=image.getWidth();
  for(var i of image.values())
    {
      var k=i.getX();
      if(k<w/3)
        {
          i.setRed(150);
        }
      else if(k<2*w/3)
        {
          i.setBlue(150);
        }
      else
        {
          i.setGreen(150);
        }
    }
  
  image.drawTo(canimg);
}
function dored()
{
  for(var i of image.values())
    {
      i.setRed(150);
    }
  image.drawTo(canimg);
}
function Vintage()
{
 for(var i of image.values())
   {
     i.setBlue(60);
   }
  image.drawTo(canimg);
}
function blossom()
{
  for(var pixel of image.values())
    {
      var x=pixel.getRed();
      var y=pixel.getGreen();
      var z=pixel.getBlue();
      var avg=x+y+z/3;
      if(avg<128)
        {
          pixel.setRed(3*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      
    }
  image.drawTo(canimg);
 
}