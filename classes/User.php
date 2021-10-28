<?php


namespace app;


class User
{
    private $core;
    private $database;

    public function __construct()
    {
        $this->database = new Database();
        $this->core = new Core();
    }

    public function user($data)
    {
        $email = $data['email'];
        $password = $data['password'];
        if (empty($email) || empty($password)) {
            $this->core->response("Email & Password Required");
        } else {
            $fetch = $this->database->fetchArray("select * from users where `email`='$email' and `password`='$password'");
            if ($fetch !== false) {
                $this->core->response("Success", "success", 200, $fetch);
            } else {
                $this->core->response("Email or Password Wrong");
            }
        }
    }

    public function add($data)
    {
        $name = $this->database->real_scape_str($data['name']);
        $email = $data['email'];
        $password = $data['password'];
        $roll = $data['roll'];
        $registration = $data['registration'];
        $department = $data['department'];
        $semester = $data['semester'];
        $session = $data['session'];
        $shift = $data['shift'];
        $role = $data['role'];
        $title = $this->database->real_scape_str($data['title']);
        $description = $this->database->real_scape_str($data['description']);
        $photo = $this->core->file_upload("photo");
        if (empty($name) || empty($email) || empty($password) || empty($roll) || empty($registration) || empty($department) || empty($semester) || empty($session) || empty($shift) || empty($role)) {
            $this->core->response("All Field Required");
        } else {
            $this->database->insert("INSERT INTO `users`(`name`, `email`, `password`, `roll`, `registration`, `department`, `semester`, `session`, `shift`, `title`, `description`, `photo`, `role`) VALUES ('$name','$email','$password','$roll','$registration','$department','$semester','$session','$shift','$title','$description','$photo','$role')", "users");
        }
    }

    public function edit($data)
    {
        $id = $data['id'];
        $name = $this->database->real_scape_str($data['name']);
        $password = $data['password'];
        $roll = $data['roll'];
        $registration = $data['registration'];
        $department = $data['department'];
        $semester = $data['semester'];
        $session = $data['session'];
        $shift = $data['shift'];
        $role = $data['role'];
        $title = $this->database->real_scape_str($data['title']);
        $description = $this->database->real_scape_str($data['description']);
        $featured = empty($data['featured']) ? 0 : $data['featured'];
        $photo = $this->core->file_upload("photo");
        if (empty($id) || empty($name) || empty($password) || empty($roll) || empty($registration) || empty($department) || empty($semester) || empty($session) || empty($shift) || empty($role)) {
            $this->core->response("All Field Required");
        } else {
            $sql = "UPDATE `users` SET `name`='$name',`password`='$password',`roll`='$roll',`registration`='$registration',`department`='$department',`semester`='$semester',`session`='$session',`shift`='$shift',`title`='$title',`description`='$description',`photo`='$photo',`role`='$role',`featured`='$featured' WHERE id='$id'";
            $this->database->update($sql, "users", $id);
        }
    }

    public function view($id)
    {
        $data = $this->database->fetchArray("SELECT * FROM `users` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->database->fetchAll("SELECT * FROM `users` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}