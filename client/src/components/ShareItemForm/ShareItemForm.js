import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';


class ShareForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <FormControl>
          <Button>Select an Image</Button>
          <Input placeholder={'Name your item'} />
          <TextField
            placeholder={'Describe your item'}
            multiline
            rowsMax="4" />
          <Select>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox value="Household Items" />
                }
                label="Household"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Tools" />
                }
                label="Tools"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Electronics" />
                }
                label="Electronics"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Physical Media" />
                }
                label="Physical Media"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Sporting Goods" />
                }
                label="Sporting Goods"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Musical Instruments" />
                }
                label="Musical Instruments"
              />
              <FormControlLabel
                control={
                  <Checkbox value="Recreational Equipment" />
                }
                label="Recreational Equipment"
              />
            </FormGroup>
          </Select>
          <Button>Share</Button>
        </FormControl>
      </div>
    )
  }
}

export default ShareForm
