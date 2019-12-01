import React, { Component } from 'react';
import { get } from 'lodash';
import uniqid from 'uniqid';
import tableDragger from 'table-dragger';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import mock from './mock';
import HeaderColumn from '../HeaderColumn';

import './style.scss';

class Table extends Component {
  componentDidMount() {
    tableDragger(document.getElementById("table"));
  }

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
      case 'phone1': {
        return 'phone1'
      }
      case 'phone2': {
        return 'phone2'
      }
      case 'phone3': {
        return 'phone3'
      }
      case 'phone4': {
        return 'phone4'
      }
      case 'phone5': {
        return 'phone5'
      }
      case 'phone6': {
        return 'phone6'
      }
      case 'phone7': {
        return 'phone7'
      }
      case 'phone10': {
        return 'phone10'
      }
      case 'phone11': {
        return 'phone11'
      }
      case 'phone12': {
        return 'phone12'
      }
      case 'phone13': {
        return 'phone13'
      }
      case 'phone14': {
        return 'phone14'
      }
      case 'phone15': {
        return 'phone15'
      }
      case 'phone16': {
        return 'phone16'
      }
      case 'phone17': {
        return 'phone17'
      }
      case 'phone18': {
        return 'phone18'
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
        <PerfectScrollbar>
          <table id='table' className="table__content" border='1' width='80%'>
            <thead className="table__header">
              {this.renderTableHead()}
            </thead>
            <tbody id='tbody' className="table__body">
              {
                mock.row.map((row, i) => (
                  <tr className={i % 2 === 0 ? "row table__row-even" : "row"} key={uniqid()}>{this.renderTableBody(row)}</tr>
                ))
              }
            </tbody>

          </table>
        </PerfectScrollbar>
      </div>
    )
  }
}

export default Table;