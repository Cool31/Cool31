<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("myServer", "Ecomm260aqt2", "B2:afC¥h)RI;-H", "shoppingcenter");

$result = $conn->query("SELECT Order Date, Order No, Customer Name, Mobile Number, Ship Addr, Freight Ch, Emp Id, Grapes, Cherry, Oranges, Apples, Pineapple, Guava, Grapes Green, Bananas, Peaches, Apricots, Cashewnuts, Dry Fruits, Card Type, Token, Total Pay, Card Charges,Final Pay Amt,Type Card, Grape Net, Cherry Net, Orange Net, Apple Net, Pineapple Net, Guava Net, Green Net, Banana Net, Peach Net, Apricot Net, Cashewnut Net, Dry Fruit Net, Total Net, Final Net, Total Wt, Grapes Amt, Cherry Amt, Oranges Amt, Apples Amt, Pineapples Amt, Guavas Amt, Grapegreen Amt, Bananas Amt, Peaches Amt, Apricot Amt, Cashewnut Amt, Dry Fruits Amt, Grand Amt FROM Shop");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
$outp .= '{"Order Date": "'.$rs["date"].'",';

$outp .= '"Order No":'". $rs["ords"].'",';

$outp .= '"Customer Name":"'. $rs["fname"].'",';


outp .= '"Mobile Number":"'. $rs["number"].'",';

outp .= '"Ship Addr":"'. $rs["ship"].'",';

outp .= '"Freight Ch":"'. $rs["shipadd"].'",';

outp .= '"Emp Id":"'. $rs["shipemploy"].'",';

outp .= '"Grapes":"'. $rs["mob"].'",';

outp .= '"Cherry":"'. $rs["ban"].'",';

outp .= '"Oranges":"'. $rs["tan"].'",';

outp .= '"Apples":"'. $rs["van"].'",';

outp .= '"Pineapple":"'. $rs["dan"].'",';

outp .='"Guava":"'. $rs["bun"].'",';

outp .= '"Grapes Green":"'. $rs["sun"].'",';

outp .= '"Bananas":"'. $rs["pun"].'",';

outp .='"Peaches":"'.$rs["tun"].'",';

outp .= '"Apricots":"'. $rs["dunn"].'",';

outp .= '"Cashewnuts":"'. $rs["tuss"].'",';

outp .= '"Dry Fruits":"'. $rs["tunes"].'",';

outp .= '"Card Type":"'. $rs["cardsoftype"].'",';

outp .='"Token":"'. $rs["txt"].'",';

outp .= '"Total Pay":"'. $rs["totaltopay"].'",';

outp .= '"Card Charges":"'. $rs["cardcharges"].'",';

outp .= '"Final Pay Amt":"'. $rs["finaltotal"].'",';

outp .= '"Type Card":"'. $rs["cardType"].'",';

outp .= '"Grape Net":"'. $rs["grapenet"].'",';

outp .= '"Cherry Net":"'. $rs["cherrynet"].'",';

outp .= '"Orange Net":"'. $rs["orangenet"].'",';

outp .= '"Apple Net":"'. $rs["applenet"].'",';

outp .= '"Pineapple Net":"'. $rs["papplenet"].'",';

outp .= '"Guava Net":"'. $rs["guavanet"].'",';

outp .= '"Green Net":"'. $rs["greennet"].'",';

outp .= '"Banana Net":"'. $rs["banananet"].'",';

outp .= '"Peach Net":"'. $rs["peachnet"].'",';

outp .= '"Apricot Net":"'. $rs["apricotnet"].'",';

outp .= '"Cashew Net":"'. $rs["cashewnet"].'",';

outp .= '"Dry Fruits Net":"'. $rs["drynet"].'",';

outp .= '"Total Net:"'. $rs["totalnet"].'",';

outp .= '"Final Net":"'. $rs["finalnet"].'",';

outp .= '"Final Wt":"'. $rs["totalwt"].'",';

outp .= '"Grapes Amt":"'. $rs["grapes"].'",';

outp .= '"Cherry Amt":"'. $rs["cherries"].'",';

outp .= '"Oranges Amt":"'. $rs["oranges"].'",';

outp .= '"Apple Amt":"'. $rs["apples"].'",';

outp .= '"Pineapple Amt":"'. $rs["papples"].'",';

outp .= '"Guavas Net":"'. $rs["guavas"].'",';

outp .= '"Grapegreen Amt":"'. $rs["grapesgreen"].'",';

outp .= '"Bananas Amt":"'. $rs["bananas"].'",';

outp .= '"Peaches Amt":"'. $rs["peaches"].'",';

outp .= '"Apricot Amt":"'. $rs["apricots"].'",';
outp .= '"Cashewnuts:"'. $rs["cashewnuts"].'",';

outp .= '"Dry Fruits Amt":"'. $rs["dryfruits"].'",';

outp .= '"Grand Amt":"'. $rs["grandfruit"].'",';
}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
