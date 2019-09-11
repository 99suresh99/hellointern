<?php
$connection=mysql_connect("localhost","root","");
$db = mysql_select_db("be_training", $connection);
if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$education = $_POST['education'];
$experience = $_POST['experience'];
$gender = $_POST['gender'];
$file_name = $_FILES['image_src']['name'];
$file_tmp =$_FILES['image_src']['tmp_name'];
$store = "upload/" .$file_name;
move_uploaded_file($file_tmp,$store);
$query= mysql_query("INSERT INTO training(name,email,phone,education,experience,gender,image_src) VALUES('$name', '$email', '$phone', '$education', '$experience', '$gender','$file_name')");
if($query)
	{
	echo "<font color='green'>Data added successfully.";
}else{
	echo "<font color='red'>Data insersion failed.";
}
}

mysql_close($connection);	
?>