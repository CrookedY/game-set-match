(function(){
    var stats = document.getElementById('stats1Details');
    var statButton = document.getElementById('stats1Button');

    statButton.addEventListener('click',function(){
        console.log(stats.style.display)
        if(stats.style.display  =='block'){
            stats.style.display  ='none'
        } else{
            stats.style.display  ='block'
        }
    });


    //end of IIFE
})()