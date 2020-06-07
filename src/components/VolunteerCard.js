import React from "react";
import { Grow, Paper, List, ListItem, ListItemText } from "@material-ui/core";
import "./../theme/components.scss";

class VolunteerCard extends React.Component {
  render() {
    return (
      <Grow in={true}>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Paper elevation={3}>
            <div className="fb">
              <img
                alt={this.props.name}
                src={this.props.imgsrc}
                height="250"
                width="200"
              ></img>
              <List>
                <ListItem>
                  <ListItemText>{this.props.name}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{this.props.year}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{this.props.dept}</ListItemText>
                </ListItem>
              </List>
            </div>
          </Paper>
        </div>
      </Grow>
    );
  }
}

export default VolunteerCard;
