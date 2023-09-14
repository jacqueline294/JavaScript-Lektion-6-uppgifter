function changeColor() {
  
    document.getElementById("my-color-id").style.color= "green"
    }
     
    function variables() {
        var name=""
        var age=0
        var result= prompt("what is your name?")
        var result2= prompt("How old are you?")
        alert("Welocme "+ result + " you are " + result2 + " years old")
    
    
      
    }
    
    function arrays() {
        var score= ["Dog","Cat","Horse","Goat","Cow"]
        alert(score[3])
        
        
    }
    function userLogin() {
        var result=prompt("Please enter loging name")
        alert(result)
        
    }
    
    function loopPractice() {
    for (let index = 0; index < 20; index++) {
    
        alert(index)
        
        
    }
    
    
        
    }

    function loopDown() {
        for (let index = 20; index > 0; index--) {
        
            alert(index)
        }
    }
        
    
    function calculateScore() {
        var playerScore=[150,275,600,123,834,900,1000]
        var sum= 0
        
        for (let index = 0; index < playerScore.length; index++) {
    
            sum += playerScore[index]
             alert(sum)
            
        }
    }


        
     