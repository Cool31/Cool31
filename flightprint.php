//install PDFlib library
<?php
$pdf= new pdf();
pdf_begin_document($pdf);
pdf_setinfo($pdf, "Az AirLines");
pdf_setinfo($pdf, "Flight Ticket");
pdf_setinfo($pdf, "photo");
pdf_setinfo($pdf, "Email Id: az@gmail.com", "Helpline - General Inquiry: 123456");
pdf_setinfo($pdf, ": az@gmail.com", "Helpline - General Inquiry: 123456");
pdf_setinfo($pdf, "Emergency:1111", "Protection:2222", "Medical:3333", "Immigration:4444", "Complaints:5555");
pdf_setinfo($pdf, "<b>Dear Customer,<br>
We thank you for choosing us for your service needs.  We are delighted to offer full assistance for your travel requirements. We wish you a happy journey.</b>");
pdf_setinfo($pdf, "Customer Name", "Flight No", "Class", "Departure Date & Time/Destination", "Arrival Date & Time/Arrival", "Ticket No", "No of Passengers", "Seats", "Passport(s) No & Expiry Date", "Meals", "Ticket Fare", "Luggage Wt", "Bassiseat");
pdf_begin_page($pdf, (72 * 8.5), (72 * 11));
$font=pdf_findfont($pdf, "Times-Roman", "host",8);
pdf_set_font($pdf, $font, 40);
pdf_set_text_pos(72, 700);
pdf_show($pdf, custname, flightnumb, clas, destinations, ping, ticket, seatchair, passport, expdates, meals, totalairfare, luggage, bassiseat);
pdf_end_page($pdf);
pdf_end_document($pdf);
$document=pdf_get_buffer($pdf);
$length=strlen($document);
$filename="bookedflight.pdf";

header("Content-Type: application/pdf");
header("Content-length".$length);
header("Content-disposition:inline; filename=".$filename);
echo($document);
unset($document);
pdf_delete($pdf);
?>
