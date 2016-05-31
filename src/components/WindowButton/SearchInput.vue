<template>
  <span>
    <svg width="20px" height="20px" viewBox="0 6 23 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="iconmonstr-magnifier-4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 6.000000)">
            <path d="M22.18656,19.25568 L17.40864,14.47776 C18.33504,13.01856 18.87072,11.28864 18.87072,9.4368 C18.87072,4.2336 14.63808,0 9.43488,0 C4.23168,0 0,4.2336 0,9.4368 C0,14.64 4.23168,18.8736 9.43584,18.8736 C11.19648,18.8736 12.84576,18.3888 14.25696,17.54592 L19.07712,22.36608 C21.13536,24.42144 24.24576,21.31392 22.18656,19.25568 L22.18656,19.25568 Z M2.92512,9.4368 C2.92512,5.84736 5.8464,2.92608 9.43584,2.92608 C13.02528,2.92608 15.94656,5.8464 15.94656,9.4368 C15.94656,13.0272 13.02528,15.94752 9.43584,15.94752 C5.8464,15.94752 2.92512,13.02624 2.92512,9.4368 L2.92512,9.4368 Z M4.85472,7.74336 C6.75936,3.32832 13.17216,3.84 14.37984,8.4624 C11.9472,5.60736 7.66656,5.30016 4.85472,7.74336 L4.85472,7.74336 Z" id="Shape" fill="#BDC3C7"></path>
        </g>
    </svg>
    <input id="search-box" type="text" name="search-box" />
  </span>

</template>
<style lang="scss" scoped>
@import "../../assets/css/baseColor.scss";
  svg{
    position: relative;
    top:6px;
  }
  input{
    color: $wetAsphalt;
    font-family:"Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","WenQuanYi Micro Hei",sans-serif;
    font-weight:bold;
    width: 70%;
    height: 20px;
    padding-left: 15px;
    border-color:$wetAsphalt;
    border-radius:15px;
  }
  input:focus{
    outline: none
  }
</style>
