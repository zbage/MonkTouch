<? require($_SERVER["DOCUMENT_ROOT"]."/monkcms.php"); 
  $id; 
  $output;
  $node;
  $json;


  $string = getContent(
    "section",
    "display:detail",
    //"find:".$id,
    "find:".$_GET['id'],
    "emailencode:no",                     
    "show:__text__",
    "noecho"
  );
  
  $node = array(
          array(text => $string)
      );
      
  $output = array( item => $node);
  $json = json_encode($output);
  
  $callback = $_REQUEST['callback'];
   
  if($callback){
    header('Content-type: text/javascript');
    echo $callback . '(' . $json . ');';
  }else{
    header('Content-type: application/json');
    echo $json; 
  }  
   
 ?>      
      
