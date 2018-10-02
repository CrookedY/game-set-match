(function(){
    var stats1 = document.getElementById('stats1Details');
    var stat1Button = document.getElementById('stats1Button');

    statButton1.addEventListener('click',function(){
        console.log(stats1.style.display)
        if(stats.style.display  =='block'){
            stats.style.display  ='none'
        } else{
            stats.style.display  ='block'
        }
    });


    //end of IIFE
})()