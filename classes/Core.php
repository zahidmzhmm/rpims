<?php


namespace app;


class Core
{
    public function __construct()
    {
        if (!isset($_SERVER['HTTP_X_API_KEY'])) {
            $this->response("Authorization Failed!");
            exit;
        }
        ErrorReport === 0 ? error_reporting(false) : error_reporting(E_ALL);
    }

    public function response($message, $type = "danger", $status = 400, $data = [])
    {
        echo json_encode(['message' => $message, 'type' => $type, 'status' => $status, 'data' => $data]);
    }
}