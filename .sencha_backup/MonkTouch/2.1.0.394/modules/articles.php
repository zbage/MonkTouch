<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$outarray; 
$nodes;
$json;
$output;

$category = "";
$series = "";
$group = "";
$howmany = "20";
$offset = "";
$order = "recent";
$hideseries="";
$hidecategory="";
$hidegroup="";
$author="";
$tags="";


//$filters = json_decode(stripslashes(urldecode($_GET['filter'])),true);
$filters = $_GET;
if($filters != null){
foreach($filters as $key=>$value){
    switch ($key)
    {
        case 'series':
            $series = $value;
            break;
        case 'category':
            $category = $value;
            break;
        case 'group':
            $group = $value;
            break;
        case 'limit':
            $howmany = $value;
            break;
        case 'order':
            $order = $value;
            break;
        case 'hide_series':
            $hideseries = $value;
            break;
        case 'hide_category':
            $hidecategory = $value;
            break;
        case 'hide_group':
            $hidecgroup = $value;
            break;
        case 'author':
            $author = $value;
            break;
        case 'tags':
            $tags = $value;
            break;
        case 'start':
              $offset = $value;
              break;
            
    }       
}
}


$string = getContent(  
    "article",
    "display:list",
    "order:".$order, 
    "find_category:".$category,
    "find_series:".$series,
    "find_group:".$group,
    "howmany:".$howmany,
    "offset:".$offset,
    "find_author:".$author,
    "find_tag:".$tags,
    "hide_series:".$hideseries,
    "hide_cateogory:".$hidecategory, 
    "hide_group:".$hidegroup, 
		"show:__title__",
		"show:||",
		"show:__image__",
		"show:||",
		"show:__preview limit='200'__",
		"show:||",
		"show:__author__",
		"show:||",
		"show:__date format='M d Y'__",
		"show:||",
		"show:__text__",
		"show:||",
		"show:__slug__",
		"show:||",
		"show:__audiourl__",
		"show:||",
		"show:__videourl__",
		"show:||",
		"show:__videoembed__",
		"show:||",
		"show:__imageurl2 width='50' height='50'__",
		"show:~~",
		"noecho"
	); 
	 
	
	$prearray = explode("~~",$string);
	
	for ($i=0; $i <count($prearray)-1; $i++) { 
		 $outarray[$i] = explode("||",$prearray[$i]);
    }
    $i = 0;
	foreach ($outarray as $key => $value) {
	
	     preg_match_all('/(src)=("[^"]*")/i',$value[9],$parts);
	     $type;
	     $media_id = substr($parts[0][0],5,-1);
	     $posyt = strpos($parts[0][0],"youtube");
	     $posvm = strpos($parts[0][0],"vimeo");
	       //$iframe[0][2][0] gets src value from iframe
	     if($posyt !==false){
	         $type = "youtube";
	     }else if($posvm !==false){
	         $type = "vimeo";
	     }
	     
	     $nodes[$i] = array(
		    title => $value[0],
		    image => $value[1],
		    preview => $value[2],
		    author => $value[3],
		    date => $value[4],
		    text => $value[5],
		    slug => $value[6],
		    audio => $value[7],
		    video => $value[8],
		    embed => array(
		        type => $type,
		        media_id => $media_id,
		        code => $value[9]
		    ), 
		    thmb => $value[10]
		    );
		    $i++;
	}
	
	$totalpossible = getContent(  
	  "articles",
	  "display:list",
	  "order:".$order, 
	  "find_category:".$category,
	  "find_series:".$series,
	  "find_group:".$group,
	  //"howmany:".$howmany, hide both howmany and offest because it needs to know total of possible articles to return.
	  //"offset:".$offset,
	  "find_author:".$author,
	  "find_tag:".$tags,
	  "hide_series:".$hideseries,
	  "hide_category:".$hidecategory, 
	  "hide_group:".$hidegroup, 
	  "before_show:__totalpossible__",
	  "noecho"
	); 
	
	
	$output = array( 
	  items => $nodes,
	  total => intval($totalpossible)
	);
	
	//$output = array("items" => $nodes);
	
	$json = json_encode($output);
	//print_r($articles); 
	
	 $callback = $_REQUEST['callback'];
	 
	 if($callback){
	     header('Content-type: text/javascript');
	     echo $callback . '(' . $json . ');';
	 }else{
	     header('Content-type: application/json');
	     echo $json; 
	 }
	
?>