import React from 'react';

function Alert(props) {
    return (
        <div className={["alert", "alert-" + props.type, "alert-dismissible"].join(" ")} role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>提示！</strong> 
            {props.info}
        </div>
    );
}

export default Alert;