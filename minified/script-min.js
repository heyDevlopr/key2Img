var fileSaverSupported,stylePrefix=$("input[name=style]:checked").val(),userText="",keysArray="",htmlCode="";try{new Blob;fileSaverSupported=!0}catch(e){fileSaverSupported=!1}function dataURItoBlob(e){for(var t=atob(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),o=new Uint8Array(n),a=0;a<t.length;a++)o[a]=t.charCodeAt(a);return new Blob([n],{type:r})}function hideLoader(e){1==e&&$("#loader").css("display","none"),0==e&&$("#loader").css("display","block")}function appendImg(e){let t=new Image;t.src=e,$("#img-preview").html(""),$("#img-preview").append(t),$("#preview-div").css("display","block")}function saveAsPng(){hideLoader(!1);let e=$("#html-output"),t=prompt("Enter the Scale: ",2);if(null==t)return;if(t=!1===isNaN(t)?parseInt(t):2,t>10&&!confirm("Are You Sure? Scale More than 10 Can Make your Device Lag"))return;let r=10*Math.round(e.width()*t/10),n=10*Math.round(e.height()*t/10);domtoimage.toPng(e[0],{width:r,height:n,style:{transform:"scale("+t+")",transformOrigin:"top left"}}).then((function(e){!0===fileSaverSupported?saveAs(dataURItoBlob(e),"key2Img-"+r+"x"+n+".png"):(appendImg(e),$("#output-demension").text("Height: "+n+"px, Width: "+r)),hideLoader(!0)})).catch((function(e){alert("oops, something went wrong!\n"+e),hideLoader(!0)}))}function saveAsJpeg(){hideLoader(!1);let e=$("#html-output"),t=prompt("Enter the Scale: ",2),r=prompt("Quality (0.1 - 1): ",.5);if(null==t||null==r)return;if(!1!==isNaN(t)&&!1!==isNaN(r)||(t=parseInt(t),r=parseFloat(r)),0!==t&&0!==r||(t=1,parseFloat(.5)),r>1&&(r=.5),t>10&&!confirm("Are You Sure? Scale More than 10 Can Make your Device Lag"))return;let n=10*Math.round(e.width()*t/10),o=10*Math.round(e.height()*t/10);domtoimage.toJpeg(e[0],{quality:r,width:n,height:o,style:{transform:"scale("+t+")",transformOrigin:"top left",background:"#fff"}}).then((function(e){!0===fileSaverSupported?saveAs(dataURItoBlob(e),"key2Img-"+n+"x"+o+".jpeg"):(appendImg(e),$("#output-demension").text("Height: "+o+"px, Width: "+n)),hideLoader(!0)})).catch((function(e){alert("oops, something went wrong!\n"+e),hideLoader(!0)}))}const replaceIco=e=>e.split(" ").map((e=>iconMap[e]??e)).join(" ");function renderKeys(){var e=$("#text-input").val(),t=e.split("+").map(replaceIco);t=(t=$.map(t,$.trim)).filter((e=>e));var r="";if(""==e)r="<kbd class="+stylePrefix+">Ctrl</kbd>+<kbd class="+stylePrefix+">Alt</kbd>+<kbd class="+stylePrefix+">C</kbd>";else for(let e=0;e<t.length;e++)e==t.length-1?r+="<kbd class="+stylePrefix+">"+t[e]+"</kbd>":r+="<kbd class="+stylePrefix+">"+t[e]+"</kbd>+";return $("#output-location").html(r),0}$("#save-jpg").on("click",saveAsJpeg),$("#save-png").on("click",saveAsPng),$("#text-input").keyup(renderKeys),$("input[name=style]").on("click",(function(e){stylePrefix=$("input[name=style]:checked").val(),renderKeys()})),window.onload=e=>{null==Cookies.get("firstTime")&&(Cookies.set("firstTime","no",{expires:365}),introJs().setOptions({steps:introSteps}).start()),renderKeys()};