import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import * as ACTIONS from '../store/actions/actions';
import AddWord from './addword';
import axios from 'axios';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import AddIcon from '@material-ui/icons/Add';

import Pagination from "react-js-pagination";

import '../App.css'

const wordList = ["apple", "dog", "maxim"];
const wordConentList = ["apple is fruit", "dog is animal", "maxim is name"];

class Words extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    selectedIndex: 0,
    selectedWordContent: "",
    open: false,
  }

  props = {
  }

  handleListItemClick(event, index) {
    this.setState({ selectedIndex: index, selectedWordContent: wordConentList[index] });
  };

  generate = (element) => {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  handleClickAdd() {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={4} align="right" spacing={8}>
              <Button variant="contained" color="primary" onClick={() => this.handleClickAdd()}><AddIcon></AddIcon>Add Word</Button>
              <AddWord />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={4} spacing={8}>
              <List component="nav">
                {[0, 1, 2].map(index => (
                  <ListItem
                    button
                    onClick={(event) => this.handleListItemClick(event, index)}
                  >
                    <ListItemText primary={wordList[index]} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={8}>
              <textarea value={this.state.selectedWordContent} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps() {

}

function mapDispatchToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(Words); 