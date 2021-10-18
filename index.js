
let buttons = document.getElementsByClassName("butjs")
let screen = document.getElementById("screen")
let value = ""
valueBackup = NaN
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
            screen.value = eval(screen.value)
            value = ""
        }
        else if (text == "SQRT"){
            value = screen.value
            value = eval(value)
            screen.value = Math.sqrt(value)
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