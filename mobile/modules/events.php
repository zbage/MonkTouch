<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$outarray; 
$nodes;
$category;
$group;
$json;

$category = "";
$group = "";
$howmany = "25";
$hidecategory="";
$hidegroup="";
$location="";
$state="";
$findnear="";
$radius="";
$howmanydays="";
$order="";

$filters = json_decode(stripslashes(urldecode($_GET['filter'])),true);
if(count($filters) > 0 && $filters != null){
  foreach($filters as $key=>$value){
      switch ($value['property'])
      {
          case 'category':
              $category = $value['value'];
              break;
          case 'group':
              $group = $value['value'];
              break;
          case 'howmany':
              $howmany = $value['value'];
              break;
          case 'howmanydays':
              $howmanydays = $value['value'];
              break;
          case 'hide_category':
              $hidecategory = $value['value'];
              break;
          case 'hide_group':
              $hidegroup = $value['value'];
              break;
          case 'location':
              $location = $value['value'];
              break;
          case 'state':
              $state = $value['value'];
              break;
          case 'near':
              $findnear = $value['value'];
              break;
          case 'radius':
              $radius = $value['value'];
              break;
          case 'order':
              $order = $value['value'];
              break;
      }       
  }
}
 

$string = getContent(  
		"event",
    "display:list",
    "find_category:".$category,
    "find_group:".$group,
    "howmany:".$howmany, 
    "order:".$order,
    "hide_category:".$hidecategory,
    "hide_group:".$hidegroup,
    "find_location:".$location,
    "find_state:".$state,
    "find_near:".$findnear,
    "radius:".$radius,
    "howmanydays:".$howmanydays,
		"show:__title__",
		"show:||",
		"show:__image__",
		"show:||",
		"show:__preview limit='200'__",
		"show:||",
	  "show:__description__",
    "show:||",
		"show:__coordname__",
		"show:||",
		"show:__coordemail__",
		"show:||",
		"show:__coordphone__",
		"show:||",
		"show:__eventstart format='M d Y'__",
		"show:||",
		"show:__eventstartTwo format='M'__",
		"show:||",
		"show:__eventstartThree format='d'__",
		"show:||",
		"show:__eventend format='M d Y'__",
		"show:||",
		"show:__eventtimes__",
		"show:||",
		"show:__googlemap__",
		"show:||",
		"show:__fulladdress__",
		"show:||",
		"show:__location__",
		"show:||",
		"show:__slug__",
		"show:||",
		"show:__registration linktext='Register'__",
		"show:~~",
		"noecho"
	); 
	 
   //echo($string);
	
	$prearray = explode("~~",$string);
	
	for ($i=0; $i <count($prearray)-1; $i++) { 
    	
		 $outarray[$i] = explode("||",$prearray[$i]);
    }
    //generate json structure
    $i = 0;
	foreach ($outarray as $key => $value) {
	     $nodes[$i] = array(
		    title => $value[0],
		    image => $value[1],
		    preview => $value[2],
		    text => $value[3],
		    date => array(  
	               startDate => $value[7],
	               month => $value[8],
	               day => $value[9],
	               end => $value[10],
	               times => $value[11]
	            ),    
		    coord => array(
		            name => $value[4],
		            email => $value[5],
		            phone => $value[6]
		        ),
		    loc => array(
		            name => $value[14],
		            address => $value[13],
		            googlemap => $value[12]
		        ),
		    slug => $value[15],
		    register => $value[16]
		    );
	    $i++;
	}
	
	//$output = array("items" => $nodes);
	
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