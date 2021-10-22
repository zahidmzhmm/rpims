<?php
global $url;
if ($url === 'user' && isset($post['email'], $post['password'])) {
    $user->user($post);
} elseif ($url === 'addUser' && isset($post['name'], $post['email'], $post['password'], $post['roll'], $post['registration'], $post['department'], $post['semester'], $post['session'], $post['shift'], $post['role'])) {
    $user->add($post);
} else {
    $core->response("Something went wrong");
}