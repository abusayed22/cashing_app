import React from 'react'

function History() {
    const transactions = [
        { id: 1, amount: '86603', date: '21 Jan 2025', sender: 'Shohag',status:"received" },
        { id: 2, amount: '100000', date: '21 Jan 2025', sender: 'Habib',status:"send" },
        { id: 3, amount: '250000', date: '19 Jan 2025', sender: 'Habib',status:"received" },
        { id: 4, amount: '200000', date: '16 Jan 2025', sender: 'Habib',status:"send" },
        { id: 5, amount: '100000', date: '15 Jan 2025', sender: 'Shohag',status:"received" },
      ];
  return (
     <div className='container'>
       <div className="card">
        <div className="card-header">
          <h4 className="card-title">Payments History</h4>
          <a href="#">See more</a>
        </div>
        <div className="card-body">
          <div className="invoice-content ps ps--active-y">
            <ul>
              <li className="d-flex justify-content-between active">
                <div className="d-flex align-items-center">
                  <div className="invoice-info">
                    <h5 className="mb-0">Electricity</h5>
                    <p>5 January 2024</p>
                  </div>
                </div>
                <div className="text-end">
                  <h5 className="mb-2">+450.00</h5>
                  <span className="text-white bg-success">Paid</span>
                </div>
              </li>
              <li className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="invoice-info">
                    <h5 className="mb-0">Internet</h5>
                    <p>5 January 2024</p>
                  </div>
                </div>
                <div className="text-end">
                  <h5 className="mb-2">+450.00</h5>
                  <span className="text-white bg-warning">Due</span>
                </div>
              </li>
              <li className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="invoice-info">
                    <h5 className="mb-0">Apple Music</h5>
                    <p>5 January 2024</p>
                  </div>
                </div>
                <div className="text-end">
                  <h5 className="mb-2">+450.00</h5>
                  <span className="text-white bg-danger">Cancel</span>
                </div>
              </li>
              {/* <li className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="invoice-info">
                    <h5 className="mb-0">Groceries</h5>
                    <p>5 January 2024</p>
                  </div>
                </div>
                <div className="text-end">
                  <h5 className="mb-2">+450.00</h5>
                  <span className="text-white bg-success">Paid</span>
                </div>
              </li> */}
            </ul>
            <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
              <div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div>
            </div>
            <div className="ps__rail-y" style={{ top: '0px', height: '295px', right: '0px' }}>
              <div className="ps__thumb-y" tabIndex="0" style={{ top: '0px', height: '245px' }}></div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default History
