/* eslint-disable */

import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardBody } from "shards-react";

export class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <Card className="d-flex m-3">
          <CardBody>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.address}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.bio}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{user.image}</h6>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
