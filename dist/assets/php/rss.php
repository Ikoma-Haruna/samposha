<?php
$url = 'https://note.com/bonustrack_skz/rss';
$xml = file_get_contents($url);
header('Content-type: application/xml; charset=UTF-8');
print $xml;
?>
