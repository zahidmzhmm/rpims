<?php

use app\Core;
use app\Database;
use app\User;
use app\Notice;
use app\Room;

$req = $_REQUEST;
$post = $_POST;
$get = $_GET;
require_once APP_ROOT . "classes/Core.php";
require_once APP_ROOT . "classes/Database.php";
require_once APP_ROOT . "classes/User.php";
require_once APP_ROOT . "classes/Notice.php";
require_once APP_ROOT . "classes/Room.php";
$core = new Core();
$database = new Database();
$user = new User();
$notice = new Notice();
$room = new Room();


######### Bottom Required #################
require_once APP_ROOT . "app.php";