<?php


namespace app;


class Notice
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
        $department_id = $data['department_id'];
        $title = $this->db->real_scape_str($data['title']);
        $description = $this->db->real_scape_str($data['description']);
        $url = $data['url'];
        if (empty($department_id) || empty($title) || empty($description) || empty($url)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `notice`(`department_id`, `title`, `description`, `url`) VALUES ('$department_id','$title','$description','$url')", "notice");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $department_id = $data['department_id'];
        $title = $this->db->real_scape_str($data['title']);
        $description = $this->db->real_scape_str($data['description']);
        $url = $data['url'];
        if (empty($id) || empty($department_id) || empty($title) || empty($description) || empty($url)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->update("UPDATE `notice` SET `department_id`='$department_id',`title`='$title',`description`='$description',`url`='$url' WHERE id='$id'", "notice", $id);
    }

    public function view_dep($department_id)
    {
        $data = $this->db->fetchAll("SELECT * FROM `notice` WHERE department_id='$department_id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `notice` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

}