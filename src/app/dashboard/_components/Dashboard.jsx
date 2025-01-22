import React from 'react'

function Dashboard() {
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div className="page-title">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-4">
                                <div className="page-title-content">
                                    <h3>Dashboard</h3>
                                    <p className="mb-2">Welcome Ekash Finance Management</p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="breadcrumbs">
                                    <a href="#">Home </a>
                                    <span><i className="fi fi-rr-angle-small-right"></i></span>
                                    <a href="#">Dashboard</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Stat Widgets */}
                {[
                    { title: "Total Balance", value: "$432,568", change: "2.47%", lastMonth: "$24,478", trend: "up" },
                    { title: "Total Period Change", value: "$245,860", change: "2.47%", lastMonth: "$24,478", trend: "up" },
                    { title: "Total Period Expenses", value: "$25.35", change: "2.47%", lastMonth: "$24,478", trend: "down" },
                    { title: "Total Period Income", value: "$22.56", change: "2.47%", lastMonth: "$24,478", trend: "up" }
                ].map((widget, index) => (
                    <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <div className="stat-widget-1">
                            <h6>{widget.title}</h6>
                            <h3>{widget.value}</h3>
                            <p>
                                <span className={`text-${widget.trend === "up" ? "success" : "danger"}`}>
                                    <i className={`fi fi-rr-arrow-trend-${widget.trend}`}></i>
                                    {widget.change}
                                </span>{" "}
                                Last month <strong>{widget.lastMonth}</strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-6">
                    <div className="card">
                        <div className="card-header balance-trend">
                            <h4 className="card-title">
                                Balance Trends <br />
                                <span>$221,478</span>
                            </h4>
                            <div className="trend-stats">
                                <p className="mb-0">Last Month</p>
                                <span className="text-success">
                                    <i className="fi fi-rr-arrow-trend-up"></i> 12.25%
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <canvas id="profileWallet" width="960" height="735"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Monthly Expenses Breakdown</h4>
                        </div>
                        <div className="card-body">
                            <div className="progress-stacked">
                                {[38, 22, 12, 9, 8, 6, 5].map((width, index) => (
                                    <div key={index} className="progress" style={{ width: `${width}%` }}>
                                        <div className={`progress-bar bg-${['orange', 'amber', 'yellow', 'lime', 'green', 'cyan', 'stone'][index]}-500`}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="list-1 mt-3">
                                <ul>
                                    {["Food", "Transport", "Healthcare", "Education", "Clothes", "Pets", "Entertainment"].map((item, index) => (
                                        <li key={index}>
                                            <p className="mb-0">
                                                <i className={`fi fi-ss-circle text-${['orange', 'amber', 'yellow', 'lime', 'green', 'cyan', 'stone'][index]}-500`}></i>
                                                {item}
                                            </p>
                                            <h5 className="mb-0">
                                                <span>$1200</span> {`${[38, 22, 12, 9, 8, 6, 5][index]}%`}
                                            </h5>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add the rest of your components following the same pattern */}
        </div>
    )
}

export default Dashboard
