
let tl=gsap.timeline({paused:true});
let btn=document.querySelector("button");
let pause=document.querySelector("#pause");
let audio=document.querySelector("audio")

tl
.from("#player",{
    display:"none",

    y:100
})
.to(".lnk",{
    y:-20,
    opacity:0,
    stagger:.3,
    duration:1

},"-=.5")
.to(".shift",{
    y:-40,
    duration:1

},"-=.5")
.to("#main button",{
    y:-100,
    duration:1
},"-=1")
.from(pause,{
    y:-20,
    display:"none",

})

btn.addEventListener("click",function(){
    tl.play();
    btn.textContent="playing";
    btn.style.color="#fff";
    btn.style.borderColor="#fff";
    btn.style.borderRadius="2em";
    btn.style.transform=" translate(-50%,-50%) scale(.9)"
    btn.style.pointerEvents="none";
    audio.play();
    audio.currentTime=0;
    pause.innerHTML=" <i class='ri-pause-mini-line'></i> "
    
})
pause.addEventListener("click",function(){
    tl.reverse();
    btn.style.borderRadius="initial";
    audio.pause();
    btn.style.pointerEvents="initial";
    btn.textContent="play now!";
    pause.innerHTML="<i class='ri-play-mini-fill'></i>";
    // btn.style.color="orangered";
    // btn.style.borderColor="orangered";

})
audio.ontimeupdate=function(){
    let cTime=audio.currentTime;
    let duration=audio.duration;
    let deg=1;
    let prg=(cTime - .25)/duration*100 +"%";
    
    document.querySelector("#prg").style.width=prg;
    document.querySelector("#player i").style.transform=`rotate(${deg}deg)`;
    deg++;
    
}
// function progress(){
//     let cTime=audio.currentTime;
//     let duration=audio.duration;
//     let prg=(cTime - .25)/duration*100 +"%";
//     console.log(typeof(prg));
//     document.querySelector("#prg").style.width=prg;
// }
