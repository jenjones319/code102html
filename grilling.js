function xmas(){
  var today=new Date();
  var cmas=new Date(today.getFullYear(), 11, 25);
  if (today.getMonth()==11 && today.getDate()>25) 
  {
    cmas.setFullYear(cmas.getFullYear()+1); 
  }  
  var one_day=1000*60*60*24;
  console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + ' days left until Christmas');
}

xmas (); 

var visitor = function (){
  var favColor = prompt('What is your favorite color?');
  var response;
  if (favColor = 'blue') {
      response = 'Good choice! Mine, too.';
    } else if (favColor = 'orange') {
      response = 'That is a fruit, not a color.';
    } else if (favColor = 'yellow') {
      response = 'Mm. Tastes like sunshine.';
    } else {
      response = 'All colors are awesome!';
    }
    
    return '<h3>' + response + '<h3>'
  console.log(response);
  }
 visitor ();
