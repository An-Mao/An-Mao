<?php
if(date('H')<20 && date('H')>6){
	$theme = 'theme.white.am.css';
}else{
	$theme = 'theme.black.am.css';
}

echo '<link href="/sources/css/'.$theme.'" rel="stylesheet" type="text/css">';
?>