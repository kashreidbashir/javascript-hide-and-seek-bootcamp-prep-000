function getFirstSelector(selector) {
  return document.querySelector(selector);
}
// The above function returns the first element that matches the selector


function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}
// returns the first element that matches the selector


function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
// returns the most deeply nested child in #grand-node. This is the most complex function to reproduce.
// However, the main example serves a similar function.
// The for function runs to the deepest nested piece of information in the main node in a rising fashion (i.e. i++)
// The final line returns the information and look at this syntax prior to the interview. It is not particulary complex
// but unfamiliar.
  }
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}

// Print this solution prior to the interview. 
