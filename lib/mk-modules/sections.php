<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$id; 
//$output;
//$node;
//$json;

$id = $_GET['id'];
getContent(
		"section",
		"display:detail",
		"find:".$id,
		"emailencode:no",                     
		"show:__text__"
	);
/*$string = getContent(
		"section",
		"display:detail",
		"find:iphone-directions",
		"emailencode:no",                     
		"show:__text__",
		"noecho"
	);
	
	$node = array(
	        text => $string
	    );
	    
    $output = array( item => $node);
	
	//$output = array("items" => $nodes);
	
	$json = json_encode($output);
	//print_r($articles); 
	
	 $callback = $_REQUSEST['callback'];
	 
	 if($callback){
	     header('Content-type: text/javascript');
	     echo $callback . '(' . $json . ');';
	 }else{
	     header('Content-type: application/json');
	     echo $json; 
	 } */ 
	 
 ?>      
      