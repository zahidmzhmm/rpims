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
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];
        $roll = $data['roll'];
        $registration = $data['registration'];
        $department = $data['department'];
        $semester = $data['semester'];
        $session = $data['session'];
        $shift = $data['shift'];
        $role = $data['role'];
        if (empty($name) || empty($email) || empty($password) || empty($roll) || empty($registration) || empty($department) || empty($semester) || empty($session) || empty($shift) || empty($role)) {
            $this->core->response("All Field Required");
        } else {
            $this->database->insert("INSERT INTO `users`(`name`, `email`, `password`, `roll`, `registration`, `department`, `semester`, `session`, `shift`, `role`) VALUES ('$name','$email','$password','$roll','$registration','$department','$semester','$session','$shift','$role')", "users");
        }
    }
}