import React from 'react';

const AdminDashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 col-8 align-self-center">
                        <h3 className="text-themecolor">Dashboard</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h2>Welcome</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;