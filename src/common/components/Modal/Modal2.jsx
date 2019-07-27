import React from 'react'

export default function Modal2({Component, title, ...restParam}) { //restParam La nhung thuoc tinh con lai: la props


      return (
        <div>
  {/* Button trigger modal */}
  {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
    Launch
  </button> */}
  {/* Modal */}
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <Component {...restParam}/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

      )

}
