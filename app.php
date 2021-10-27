<?php
global $url;
if ($url === 'user' && isset($post['email'], $post['password'])) {
    $user->user($post);
} elseif ($url === 'addUser' && isset($post['name'], $post['email'], $post['password'], $post['roll'], $post['registration'], $post['department'], $post['semester'], $post['session'], $post['shift'], $post['role'])) {
    $user->add($post);
} elseif ($url === 'viewUser' && isset($get['id'])) {
    $user->view($get['id']);
} elseif ($url === 'editUser' && isset($post['id'], $post['name'], $post['password'], $post['roll'], $post['registration'], $post['department'], $post['semester'], $post['session'], $post['shift'], $post['role'])) {
    $user->edit($post);
} elseif ($url === "addDepartment" && isset($post['title'], $post['slogan'], $post['description'], $post['instructor'], $post['icon'], $_FILES['image'])) {
    $room->add($post);
} elseif ($url === "editDepartment" && isset($post['id'], $post['title'], $post['slogan'], $post['description'], $post['instructor'], $post['icon'], $_FILES['image'])) {
    $room->edit($post);
} elseif ($url === "addFiles" && isset($post['name'], $_FILES['file'])) {
    $room->addFiles($post);
} elseif ($url === "addNotice" && isset($post['department_id'], $post['title'], $post['description'], $post['url'])) {
    $notice->add($post);
} elseif ($url === "editNotice" && isset($post['id'], $post['department_id'], $post['title'], $post['description'], $post['url'])) {
    $notice->edit($post);
} elseif ($url === "addSubject" && isset($post['department_id'], $post['semester'], $post['name'], $post['code'])) {
    $room->addSubject($post);
} elseif ($url === "editSubject" && isset($post['id'], $post['department_id'], $post['semester'], $post['name'], $post['code'])) {
    $room->editSubject($post);
} elseif (isset($get['departmentId'])) {
    if ($url === "subjects") {
        $room->subjects($get['departmentId']);
    } elseif ($url === "notice") {
        $notice->view_dep($get['departmentId']);
    } elseif ($url === "department") {
        $room->departments_data($get['departmentId']);
    }
} elseif ($url === "subjectsAll") {
    $room->subjects_all();
} elseif ($url === "departmentsAll") {
    $room->departments();
} elseif ($url === "filesAll") {
    $room->files();
} elseif ($url === "noticeAll") {
    $notice->view_all();
} else {
    $core->response("Something went wrong");
}