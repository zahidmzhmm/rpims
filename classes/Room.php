<?php


namespace app;


class Room
{
    private $db;
    private $core;

    public function __construct()
    {
        $this->db = new Database();
        $this->core = new Core();
    }

    public function add($data)
    {
        $title = $this->db->real_scape_str($data['title']);
        $description = $this->db->real_scape_str($data['description']);
        $slogan = $this->db->real_scape_str($data['slogan']);
        $instructor = $this->db->real_scape_str($data['instructor']);
        $path = $this->db->real_scape_str($data['path']);
        $icon = $data['icon'];
        $image = $this->core->file_upload("image");
        if (empty($title) || empty($path) || empty($description) || empty($slogan) || empty($instructor) || empty($icon) || empty($image)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `departments`(`title`, `path`, `slogan`, `description`, `instructor`, `icon`, `image`) VALUES ('$title','$path','$slogan','$description','$instructor','$icon','$image')", "departments");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $title = $this->db->real_scape_str($data['title']);
        $path = $data['path'];
        $description = $this->db->real_scape_str($data['description']);
        $slogan = $this->db->real_scape_str($data['slogan']);
        $instructor = $this->db->real_scape_str($data['instructor']);
        $icon = $data['icon'];
        $image = empty($_FILES['image']['name']) ? $data['old_image'] : $this->core->file_upload("image");
        if (empty($id) || empty($title) || empty($path) || empty($description) || empty($slogan) || empty($instructor) || empty($icon) || empty($image)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->update("UPDATE `departments` SET `title`='$title',`path`='$path',`slogan`='$slogan',`description`='$description',`instructor`='$instructor',`icon`='$icon',`image`='$image' WHERE id='$id'", "departments", $id);
    }

    public function addFiles($data)
    {
        $name = $this->db->real_scape_str($data['name']);
        $file = $this->core->file_upload("file");
        if (empty($file) || empty($name)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `files`(`name`, `path`) VALUES ('$name','$file')", "files");
    }

    public function addSubject($data)
    {
        $department_id = $data['department_id'];
        $semester = $data['semester'];
        $name = $this->db->real_scape_str($data['name']);
        $code = $data['code'];
        $theory = empty($data['theory']) ? 0 : $data['theory'];
        $practical = empty($data['practical']) ? 0 : $data['practical'];
        $credit = empty($data['credit']) ? 0 : $data['credit'];
        if (empty($department_id) || empty($semester) || empty($name) || empty($code)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `subjects`(`department_id`, `semester`, `name`, `code`, `theory`, `practical`, `credit`) VALUES ('$department_id','$semester','$name','$code','$theory','$practical','$credit')", "subjects");
    }

    public function editSubject($data)
    {
        $id = $data['id'];
        $department_id = $data['department_id'];
        $semester = $data['semester'];
        $name = $data['name'];
        $code = $data['code'];
        $theory = empty($data['theory']) ? 0 : $data['theory'];
        $practical = empty($data['practical']) ? 0 : $data['practical'];
        $credit = empty($data['credit']) ? 0 : $data['credit'];
        if (empty($id) || empty($department_id) || empty($semester) || empty($name) || empty($code)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->update("UPDATE `subjects` SET `department_id`='$department_id',`semester`='$semester',`name`='$name',`code`='$code',`theory`='$theory',`practical`='$practical',`credit`='$credit' WHERE id='$id'", "subjects", $id);
    }

    public function subjects($department_id)
    {
        $data = $this->db->fetchAll("SELECT * FROM `subjects` where department_id='$department_id' order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function subjects_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `subjects` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function departments_data($department_id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `departments` where id='$department_id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function departments()
    {
        $data = $this->db->fetchAll("SELECT * FROM `departments` order by id desc");
        if ($data !== false) {
            $total = count($data) - 1;
            for ($i = 0; $i <= $total; $i++) {
                $dId = $data[$i]['id'];
                $data[$i]['notice'] = $this->db->num_rows("select * from notice where department_id='$dId'");
                $data[$i]['teachers'] = $this->db->num_rows("select * from users where department='$dId'and`role`='teacher'");
                $data[$i]['students'] = $this->db->num_rows("select * from users where department='$dId'and`role`='student'");
            }
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function files()
    {
        $data = $this->db->fetchAll("SELECT * FROM `files` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function tns_rows()
    {
        $array = [];
        $array['teacher'] = $this->db->num_rows("select * from users where role='teacher'");
        $array['notice'] = $this->db->num_rows("select * from notice");
        $array['student'] = $this->db->num_rows("select * from users where role='student'");
        $this->core->response("Success", "success", 200, $array);
    }
}