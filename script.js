
let user=0;
let computer=0;
document.getElementById("computerScore").innerText="0"; 
document.getElementById("myScore").innerText="0"; 
function myFunc1(){
    let a=Math.random();
    let b=a*3;
    let c=Math.floor(b);
    let rocks=document.getElementById("userImage").src="./photo/rock.jpg";
    if(c==0){
        rock=document.getElementById("computerImage").src="./photo/rock.jpg";
        if(rocks && rock){
            document.getElementById("result").innerHTML="Match Draw"; 
            let audio=new Audio("./sound/draw.mp3");
            audio.play();           
        }
    }
    if(c==1){
        paper=document.getElementById("computerImage").src="./photo/paper.jpg";
        if(rocks && paper){
            document.getElementById("result").innerHTML="User Loss"; 
            computer+=1;
            document.getElementById("computerScore").innerText=computer;  
            let audio=new Audio("./sound/loss.wav");
            audio.play(); 
        }
    }
    if(c==2){
        scissor=document.getElementById("computerImage").src="./photo/scissor.jpg";
        if(rocks && scissor){
            document.getElementById("result").innerHTML="User Winner";  
            user+=1;
            document.getElementById("myScore").innerText=user;  
            let audio=new Audio("./sound/win.wav");
            audio.play();          
        }
    }
}
function myFunc2(){
    let a=Math.random();
    let b=a*3;
    let c=Math.floor(b);
    let papers=document.getElementById("userImage").src="./photo/paper.jpg";
    if(c==0){
        rock=document.getElementById("computerImage").src="./photo/rock.jpg";
        if(papers && rock){
            document.getElementById("result").innerHTML="User Winner";      
            user+=1;
            document.getElementById("myScore").innerText=user;    
            let audio=new Audio("./sound/win.wav");
            audio.play();          
            
        }
    }
    if(c==1){
        paper=document.getElementById("computerImage").src="./photo/paper.jpg";
        if(papers && paper){
            document.getElementById("result").innerHTML="Match Draw";    
            let audio=new Audio("./sound/draw.mp3");
            audio.play();           
        }
    }
    if(c==2){
        scissor=document.getElementById("computerImage").src="./photo/scissor.jpg";
        if(papers && scissor){
            document.getElementById("result").innerHTML="User Loss";     
            computer+=1;
            document.getElementById("computerScore").innerText=computer;    
            let audio=new Audio("./sound/loss.wav");
            audio.play();        
        }
    }
    }
function myFunc3(){
    let a=Math.random();
    let b=a*3;
    let c=Math.floor(b);
    let scissors=document.getElementById("userImage").src="./photo/scissor.jpg";
    if(c==0){
        rock=document.getElementById("computerImage").src="./photo/rock.jpg";
        if(scissors && rock){
            document.getElementById("result").innerHTML="User Loss";   
            computer+=1;
            document.getElementById("computerScore").innerText=computer;   
            let audio=new Audio("./sound/loss.wav");
            audio.play();           
        }
    }
    if(c==1){
        paper=document.getElementById("computerImage").src="./photo/paper.jpg";
        if(scissors && paper){
            document.getElementById("result").innerHTML="User Winner";    
            user+=1;
            document.getElementById("myScore").innerText=user;  
            let audio=new Audio("./sound/win.wav");
            audio.play();          
                
        }
    }
    if(c==2){
        scissor=document.getElementById("computerImage").src="./photo/scissor.jpg";
        if(scissors && scissor){
            document.getElementById("result").innerHTML="Match draw";   
            let audio=new Audio("./sound/draw.mp3");
            audio.play();            
        }
    }
    }

