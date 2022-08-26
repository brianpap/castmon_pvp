<?php
$server = '101010';
$user = 'fredderf',
$password = 'lalefo';
$dbname = 'db';

// Creating connection object.

$conn = new mysqli($server, $user, $password, $dbname);

/* If connection is successful, connect_errno method returns 0 otherwise specific errno.*/

if($conn->connect_errno){

        die('Could not connect');

}
$sql = "SELECT nickname, password, lastname FROM accounts";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    while($row = $result->fetch_assoc()) {
      if($row["nickname"] == test_input($_POST["username"])){
        if($row["password"] == test_input($_POST["password"])){
          echo correct;
        }
      }
    }
  }
}
?>
