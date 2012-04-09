<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 

$id; 
$output;
$node;
$json;


/*$filters = json_decode(stripslashes(urldecode($_GET['filter'])),true);

foreach($filters as $key=>$value){
    switch ($value['property'])
    {
        case 'id':
            $id = $value['value'];
            break;
        case 'category':
            $category = $value['value'];
            break;
        case 'group':
            $group = $value['value'];
            break;
    }       
}*/


$string = getContent(
    "section",
    "display:detail",
    //"find:".$id,
    "find:".$_GET['id'],
    "emailencode:no",                     
    "show:__text__"
  );
  
  /*$node = array(
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
   }*/  
	 
 ?>      
      