<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$outarray; 
$nodes;
$json;
$output;

$category = "";
$group = "";
$howmany = "20";
$offset = "";
$blogname = "all";
$order = "recent";
$author = "";
$authors = "";
$tags = "";
$hidegroup="";

//$filters = json_decode(stripslashes(urldecode($_GET['filter'])),true);

$filters = $_GET;
if($filters != null){
foreach($filters as $key=>$value){
    switch ($key)
    {
        case 'blogname':
          $blogname = $value;
          break;
        case 'category':
          $category = $value;
          break;
        case 'group':
          $group = $value;
          break;
        case 'hide_group':
          $hidegroup = $value;
          break;
        case 'limit':
          $howmany = $value;
          break;
        case 'author':
          $author = $value;
          break;
        case 'authors':
          $author = $value;
          break;
        case 'tags':
          $tags = $value;
          break;
        case 'order':
          $order = $value;
          break;
        case 'start':
              $offset = $value;
              break;
    }       
}
}


$string = getContent(  
		"blog",
    "display:list",
    "order:".$order,
    "name:".$blogname,
    "find_category:".$category,
    "find_group:".$group,
    "hide_group:".$group,
    "howmany:".$howmany,
    "offset:".$offset, 
    "find_author:".$author,
    "find_authors:".$authors,
    "find_tag:".$tags,  
		"show_postlist:__blogposttitle__",
		"show_postlist:||",
		"show_postlist:__blogsummary__",
		"show_postlist:||",
		"show_postlist:__preview limit='200'__",
		"show_postlist:||",
		"show_postlist:__blogauthor__",
		"show_postlist:||",
		"show_postlist:__blogpostdate format='M d Y'__",
		"show_postlist:||",
		"show_postlist:__blogtext__",
		"show_postlist:||",
		"show_postlist:__blogpostslug__",
		"show_postlist:||",
		"show_postlist:__blogpostpermalink__",
		"show_postlist:||",
		"show_postlist:__imageurl__",
		"show_postlist:~~",
		"noecho"
	); 
	 
   //echo($string);
	
	$prearray = explode("~~",$string);
	
	for ($i=0; $i <count($prearray)-1; $i++) { 
    	
		 $outarray[$i] = explode("||",$prearray[$i]);
    }
      $i = 0;
	foreach ($outarray as $key => $value) {
	     $nodes[$i] = array(
	         
		    title => $value[0],
		    summary => $value[1],
		    preview => $value[2],
		    author => $value[3],
		    date => $value[4],
		    text => $value[5],
		    slug => $value[6],
		    link => $value[7],
		    image=> $value[8]
		    );
		    $i++;
	}
	
  $totalpossible = getContent(  
    "blog",
    "display:list",
    "order:".$order,
    "name:".$blogname,
    "find_category:".$category,
    "find_group:".$group,
    "hide_group:".$group,
    "find_author:".$author,
    "find_authors:".$authors,
    "find_tag:".$tags, 
    "before_show_postlist:__totalpossible__",
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