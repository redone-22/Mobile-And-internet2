<script type="text/javascript">
"use strict";
/*var lijstrij =["1","2","3","4","5","6","7","8"];
var lijstlijnen =["a","b","c","d","e","f","g","h"];*/
var i;
var j;
var resultaat = "";
for (i = 0; i <= 7; i = i + 1) { for (j = 0; j <= 7; j = j + 1) {
    if (j % 2 === 0) { if (i % 2 === 0) { resultaat = resultaat + "<div class='wit'></div>"; } else { resultaat = resultaat + "<div class='black'></div>"; } } else {  if (i % 2 === 0) { resultaat = resultaat + "<div class='black'></div>"; } else { resultaat = resultaat + "<div class='wit'></div>"; } }
} } document.write(resultaat);
</script>