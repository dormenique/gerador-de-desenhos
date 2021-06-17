function themeGen(){
    var item = ["dog", "cat", "candle", "banana", "fork"];
    var action = ["dressed like a", "inside a", "next to a"];
    var element = ["unicorn", "drag queen", "bee", "bunny", "monster"];

    var randomItem = item[Math.floor(Math.random() * item.length)];
    var randomAction = action[Math.floor(Math.random() * action.length)];
    var randomElement = element[Math.floor(Math.random() * element.length)];
  
  document.getElementById('result').innerHTML= "A " + randomItem + " " + randomAction + " " + randomElement
}

