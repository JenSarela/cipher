window.cipher = {
   encode:(offset,text) => {
    console.log(offset,text)
     let finalResult=""; 
    /* Acá va tu código */
        for (let i = 0; i < text.length; i++){ 
            let positionAscii= text.charCodeAt(i); 
            console.log(positionAscii);
           
          
            //paso a converti a  codigo ASCII
          if (positionAscii >= 65 && positionAscii <= 90 ){
            let cifrado = parseInt((positionAscii-65 + offset)% 26 + 65);

            finalResult += String.fromCharCode(cifrado);
   
          }
          else{
            finalResult += text[i]
          }
          }
          console.log(finalResult)
         return finalResult;     
      
      }
    //document.getElementById(finalResult)
    };

    decode: (offset,text) => {
      /* Acá va tu código */
        console.log(offset,text)
         let finalScore=""; 
        /* Acá va tu código */
            for (let i = 0; i < text.length; i++){ 
                let positionAscii= text.charCodeAt(i); 
                console.log(positionAscii);
               
              
                //paso a converti a  codigo ASCII
              if (positionAscii <= 65 && positionAscii >= 90 ){
                let descifrado = parseInt((positionAscii+ 65 - offset)% 26 + 65);
    
                finalScore += String.fromCharCode(descifrado);
       
              }
              else{
                finalScore += text[i]
              }
              }
              console.log(finalScore)
             return finalScore;     
            //document.getElementById(finalScore
          };
      
      
  
  
 




