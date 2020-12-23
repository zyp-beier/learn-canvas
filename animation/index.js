// var canvas = document.getElementById("canvas")
var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d');
var img = new Image()
img.src = 'img/Sprite (2).png'


var sx = 0
var sw = 0
var sh = 0
var left = 800
var up = 290
    var interval = setInterval(()=> {
        var x = img.width/4
        var y = img.height/4
        if(sx>=img.width) {
            sx=img.width/4
        }
        ctx.clearRect(sw,0,x,y);
        sx = sx + x
        sw = sw + x
        if(sw<800) {
            ctx.drawImage(img,sx-img.width/4,y*2,x,y,sw,0,x,y);
        }else{
            ctx.clearRect(800-x,sh,x,y);
            sh = sh + x
            if(sh<=300-img.height/4) {
                ctx.drawImage(img,sx-img.width/4,0,x,y,800-x,sh,x,y);
            }else{
                ctx.clearRect(left,300-y,x,y);
                left = left - x
                if(left>0) {
                    ctx.drawImage(img,sx-img.width/4,y,x,y,left,300-y,x,y);
                }else{
                    ctx.clearRect(0,up,x,y);
                    up = up - x
                    if(up>0) {
                        ctx.drawImage(img,sx-img.width/4,y*3,x,y,0,up,x,y);
                    }else{
                        clearInterval(interval)
                    }                   
                }
                
            
            }
            
            
        }
    },1000/6)

