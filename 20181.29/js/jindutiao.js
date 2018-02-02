var pro=document.getElementsByTagName('progress')[0];
                var timer=null;
                timer=setInterval(function(){
                    pro.value++;
                    if(pro.value==100){
                        clearInterval(timer);
                        console.log("加载完成")
                    }
                },100)