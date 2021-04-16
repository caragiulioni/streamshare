import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//minify reset
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1;font-family:Helvetica,sans-serif}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

:root{
    margin: 0;
    padding: 0;
    background-color: transparent;
}
body{
    font-family: sans-serif;

}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style-type: none;
}
a{
    text-decoration: none;
    transition: .3s ease-in-out;
}

body{
    font-size: .6em;
    transition: background 1000ms ease-in-out, color 250ms ease-in-out;
}

.dark{
    background-color: black;
    color: white;
}
@media screen and (min-width: 700px) {
    body{
    font-size: .8em;
}
  }
  @media screen and (min-width: 1080px) {
    body{
    font-size: 1em;
}
  }
  
`;

export default GlobalStyles;
