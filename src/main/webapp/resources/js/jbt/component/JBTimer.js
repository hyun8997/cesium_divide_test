var JBTimer=function(){var e=1e3,n={},t=null;function r(){null!=t&&(clearInterval(t),t=null)}return r(),t=setInterval(function(){var e=new Date,t=60*e.getHours()*60+60*e.getMinutes()+e.getSeconds();for(var r in n)if(t%parseInt(r)==0)for(var i in n[r])setTimeout(n[r][i],10)},e),{destory:function(){r(),n={}},setTimer:function(e,t,r){var i,u,o;u=t,o=r,n[i=e]||(n[i]={}),n[i][u]=o},removeTimer:function(e,t){var r,i;i=t,n[r=e]&&n[r][i]&&(delete n[r][i],0==Object.keys(n[r]).length&&delete n[r])},getTimer:function(){return n}}};