var userText,keysArray,stylePrefix=$("input[name=style]:checked").val(),htmlCode="";function appendImg(a){let e=new Image;e.src=a,$("#img-preview").html(""),$("#img-preview").append(e),$("#preview-div").css("display","block")}function saveAsPng(){let a=$("#html-output"),e=prompt("Enter the Scale: ",2);if(null==e)return;if(e=!1===isNaN(e)?parseInt(e):2,e>10&&!confirm("Are You Sure? Scale More than 10 Can Make your Device Lag"))return;let i=10*Math.round(a.width()*e/10),s=10*Math.round(a.height()*e/10);domtoimage.toPng(a[0],{width:i,height:s,style:{transform:"scale("+e+")",transformOrigin:"top left"}}).then((function(a){appendImg(a),$("#output-demension").text("Height: "+s+"px, Width: "+i)})).catch((function(a){alert("oops, something went wrong!\n"+a)}))}function saveAsSvg(){domtoimage.toSvg($("#html-output")[0],{filter:a=>"i"!==a.tagName}).then((function(a){appendImg(a)})).catch((function(a){alert("oops, something went wrong!\n"+a)}))}function renderKeys(){var a=$("#text-input").val(),e=a.split("+").filter((a=>a)),i="";for(let a=0;a<e.length;a++)e[a]=e[a].replace("ico.Win10",'<i class="fab fa-windows"></i>'),e[a]=e[a].replace("ico.Mac",'<i class="fab fa-apple"></i>'),e[a]=e[a].replace("ico.Android",'<i class="fab fa-android"></i>'),e[a]=e[a].replace("ico.Robot",'<i class="fas fa-robot"></i>'),e[a]=e[a].replace("ico.Linux",'<i class="fab fa-linux"></i>'),e[a]=e[a].replace("ico.Ubuntu",'<i class="fab fa-ubuntu"></i>'),e[a]=e[a].replace("ico.Suse",'<i class="fab fa-suse"></i>'),e[a]=e[a].replace("ico.Redhat",'<i class="fab fa-redhat"></i>'),e[a]=e[a].replace("ico.Fedora",'<i class="fab fa-fedora"></i>'),e[a]=e[a].replace("ico.Centos",'<i class="fab fa-centos"></i>'),e[a]=e[a].replace("ico.Unity",'<i class="fab fa-unity"></i>'),e[a]=e[a].replace("ico.Detective",'<i class="fas fa-user-secret"></i>'),e[a]=e[a].replace("ico.Snapchat",'<i class="fab fa-snapchat"></i>'),e[a]=e[a].replace("ico.Whatsapp",'<i class="fab fa-whatsapp"></i>'),e[a]=e[a].replace("ico.Instagram",'<i class="fab fa-instagram"></i>'),e[a]=e[a].replace("ico.Google",'<i class="fab fa-google"></i>'),e[a]=e[a].replace("ico.Microsoft",'<i class="fab fa-microsoft"></i>'),e[a]=e[a].replace("ico.Twitter",'<i class="fab fa-twitter"></i>'),e[a]=e[a].replace("ico.Facebook",'<i class="fab fa-facebook"></i>'),e[a]=e[a].replace("ico.Server",'<i class="fas fa-server"></i>'),e[a]=e[a].replace("ico.IE",'<i class="fab fa-internet-explorer"></i>'),e[a]=e[a].replace("ico.HDD",'<i class="fas fa-hdd"></i>'),e[a]=e[a].replace("ico.Search",'<i class="fas fa-search"></i>'),e[a]=e[a].replace("ico.Question",'<i class="far fa-question-circle"></i>'),e[a]=e[a].replace("ico.Music",'<i class="fas fa-music"></i>'),e[a]=e[a].replace("ico.AudioMute",'<i class="fas fa-volume-mute"></i>'),e[a]=e[a].replace("ico.AudioDown",'<i class="fas fa-volume-down"></i>'),e[a]=e[a].replace("ico.AudioUp",'<i class="fas fa-volume-up"></i>'),e[a]=e[a].replace("ico.AudioOff",'<i class="fas fa-volume-off"></i>'),e[a]=e[a].replace("ico.Forward",'<i class="fas fa-forward"></i>'),e[a]=e[a].replace("ico.Backward",'<i class="fas fa-backward"></i>'),e[a]=e[a].replace("ico.Home",'<i class="fas fa-home"></i>'),e[a]=e[a].replace("ico.Chimp",'<i class="fab fa-mailchimp"></i>'),e[a]=e[a].replace("ico.Mail",'<i class="far fa-envelope"></i>'),e[a]=e[a].replace("ico.Laptop",'<i class="fas fa-laptop"></i>'),e[a]=e[a].replace("ico.Star",'<i class="fas fa-star"></i>'),e[a]=e[a].replace("ico.Terminal",'<i class="fas fa-terminal"></i>'),e[a]=e[a].replace("ico.Link",'<i class="fas fa-external-link-alt"></i>'),e[a]=e[a].replace("ico.Command","⌘"),e[a]=e[a].replace("ico.Enter","⏎");if(""==a)i="<kbd class="+stylePrefix+">Ctrl</kbd>+<kbd class="+stylePrefix+">Alt</kbd>+<kbd class="+stylePrefix+">C</kbd>";else for(let a=0;a<e.length;a++)a==e.length-1?i+="<kbd class="+stylePrefix+">"+e[a]+"</kbd>":i+="<kbd class="+stylePrefix+">"+e[a]+"</kbd>+";return $("#output-location").html(i),0}$("#save-svg").on("click",saveAsSvg),$("#save-png").on("click",saveAsPng),$("#text-input").keyup(renderKeys),$("input[name=style]").on("click",(function(a){$("label[for='"+stylePrefix.toLowerCase().substring(3)+"']").css("font-weight","normal"),$("label[for='"+$(this).attr("id")+"']").css("font-weight","bold"),stylePrefix=$("input[name=style]:checked").val(),renderKeys()})),window.onload=a=>{renderKeys()};