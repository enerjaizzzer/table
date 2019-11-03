import React, { Component } from 'react';
import { get } from 'lodash';
import uniqid from 'uniqid';
import { Droppable } from 'react-drag-and-drop';

import mock from './mock';
import HeaderColumn from '../HeaderColumn';

import './style.scss';

class Table extends Component {
  editNameColumn = () => {

  }

  renderTableHead = () => {
    return (
      <tr key={uniqid()}>
        {mock.column.map((item) => (
          <HeaderColumn
            key={uniqid()}
            item={item}
          />
        ))}
      </tr>
    )
  }

  getValue = (item) => {
    switch (item) {
      case 'number': {
        return 'id'
      }
      case 'firstName': {
        return 'name.firstName'
      }
      case 'lastName': {
        return 'name.lastName'
      }
      case 'country': {
        return 'adress.country'
      }
      case 'city': {
        return 'adress.city'
      }
      case 'street': {
        return 'adress.street'
      }
      case 'home': {
        return 'adress.home'
      }
      case 'phone': {
        return 'phone'
      }
      default: {
        return 'error'
      }
    }
  }

  renderTableBody = (row) => {
    const newRow = mock.column.map((item) => (
      <td className="table__body-elem" key={uniqid()}>
        {get(row, this.getValue(item))}
      </td>
    ))
    return newRow;
  }

  onDrop(data) {
    console.log(data)
  }


  render() {
    return (
      <div className="table__container">
        <table className="table__content" border='1' width='80%'>
          <thead className="table__header">
            
            <Droppable
                types={['fruit']} // <= allowed drop types
                onDrop={this.onDrop.bind(this)}>
                {this.renderTableHead()}
            </Droppable>
          </thead>
          <tbody className="table__body">
            {
              mock.row.map((row, i) => (
                <tr className={i % 2 === 0 ? "row table__row-even" : "row"} key={uniqid()}>{this.renderTableBody(row)}</tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;