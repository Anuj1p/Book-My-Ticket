import React,{useState} from 'react'
import './Checkin.css'


class Checkin extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'A1','A2','A3',
          'A4','A5','A6',
          'B1','B2','B3', 'B4','B5',
          'C1','C2','C3', 'C4','C5',
          'D1','D2','D3', 'D4','D5',
          'E1','E2','E3', 'E4','E5',
          'F1','F2','F3', 'F4','F5',
        ],
        seatAvailable: [
            'A1','A2','A3',
            'A4','A5','A6',
            'B1','B2','B3', 'B4','B5',
            'C1','C2','C3', 'C4','C5',
            'D1','D2','D3', 'D4','D5',
            'E1','E2','E3', 'E4','E5',
            'F1','F2','F3', 'F4','F5',
        ]
      }
    }
    
    onClickData(seat) {
      if(this.state.seatAvailable.indexOf(seat) != -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
        })
      }
    }
    
    render() {
      return (
        <div>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
  
  class DrawGrid extends React.Component {
    render() {
      return (
         <div >
          <h2></h2>
          <table >
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.available.indexOf(row) != -1? 'available ': 'reserved'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  
  

  
  
  
  
 export default Checkin;