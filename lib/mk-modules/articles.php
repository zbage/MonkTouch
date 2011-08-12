<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$outarray; 
$nodes;
$category;
$series;
$group;
$json;
$output;

$category = $_GET['category'];
$series = $_GET['series'];
$group = $_GET['group']; 

$string = getContent(  
		"article",
        "display:list",
        "order:recent", 
        "find_category:".$category,
        "find_series:".$series,
        "find_group:".$group,
        "howmany:20",  
		"show:__title__",
		"show:||",
		"show:__image__",
		"show:||",
		"show:__preview limit='100'__",
		"show:||",
		"show:__author__",
		"show:||",
		"show:__date format='M d Y'__",
		"show:||",
		"show:__text__",
		"show:||",
		"show:__slug__",
		"show:~~",
		"noecho"
	); 
	 
	
	$prearray = explode("~~",$string);
	
	for ($i=0; $i <count($prearray)-1; $i++) { 
    	
		 $outarray[$i] = explode("||",$prearray[$i]);
    }
      $i = 0;
	foreach ($outarray as $key => $value) {
	     $nodes[$i] = array(
	         
		    title => $value[0],
		    image => $value[1],
		    preview => $value[2],
		    author => $value[3],
		    date => $value[4],
		    text => $value[5],
		    slug => $value[6]
		    );
		    $i++;
	}
	
	$output = array( items => $nodes);
	
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
	 }
	
?>