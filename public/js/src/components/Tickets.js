function Tickets(props){
    let ticketStatus = "No new tickets"
    if (props.ticketCount != 0){
        ticketStatus = "New Tickets!"
    }
    return(
        <div className="col-lg-3 col-md-6">
        <div className="panel panel-red">
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-3">
                        <i className="fa fa-support fa-5x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                        <div className="huge">{props.ticketCount}</div>
                        <div>{ticketStatus}</div>
                    </div>
                </div>
            </div>
            <a href="#">
                <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                </div>
            </a>
        </div>
    </div>
    )
}