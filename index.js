
let buttons = document.getElementsByClassName("butjs")
let screen = document.getElementById("screen")
let value = ""
valueBackup = NaN
function checknan(a){
    try {
      return eval(a)
    } catch (RefrenceError) {
        return "Invalid"
    }
}
function checksqrt(a){
    value = checknan(a);
    if(value == "Invalid"){
        return value
    }
    else{
        return Math.sqrt(value)
    }
}
for (item of buttons) {
    
     item.addEventListener("click",(e)=>{
        let text = e.target.innerText
        if (text == "X"){
          
            value += "*" 
            screen.value = value
        }
        else if (text == "C"){
            valueBackup = value
            value = ""
            screen.value = ""

        }
        else if (text == "Backspace"){
            let str  = ""
            for(let i = 0 ; i< value.length - 1 ; i++){
                str += value[i]
            }
            value = str
             = str
            screen.value  = value
        }
        else if (text == "="){
            value = screen.value
            // value = eval(value)
            value = checknan(value)
            screen.value = value
            value = ""
        }
        else if (text == "SQRT"){
            value = screen.value
            // value = eval(value)
            // value = checknan(value)
            value = checksqrt(value)
            console.log(value)
            screen.value = value;
            value = ""

            
        }

        else if (text == "Undo-C"){
            
            value = valueBackup
            screen.value = value
        }
        else{
        value += text
        screen.value = value

        }
        console.log(value)
     })
}