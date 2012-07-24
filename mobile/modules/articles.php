<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$outarray; 
$nodes;
$json;
$output;

$category = "";
$series = "";
$group = "";
$howmany = "20";
$order = "recent";
$hideseries="";
$hidecategory="";
$hidegroup="";
$author="";
$tags="";


$filters = json_decode(stripslashes(urldecode($_GET['filter'])),true);
if(count($filters) > 0 && $filters != null){
  foreach($filters as $key=>$value){
      switch ($value['property'])
      {
          case 'series':
              $series = $value['value'];
              break;
          case 'category':
              $category = $value['value'];
              break;
          case 'group':
              $group = $value['value'];
              break;
          case 'howmany':
              $howmany = $value['value'];
              break;
          case 'order':
              $order = $value['value'];
              break;
          case 'hide_series':
              $hideseries = $value['value'];
              break;
          case 'hide_category':
              $hidecategory = $value['value'];
              break;
          case 'hide_group':
              $hidecgroup = $value['value'];
              break;
          case 'author':
              $author = $value['value'];
              break;
          case 'tags':
              $tags = $value['value'];
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