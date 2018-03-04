import React from 'react';
import calculateResult from './calculateResult';
import calculateCode from './calculateCode';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [...Array(10)],
      results: [...Array(10)],
      code: calculateCode(),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.plays != nextProps.plays) {
      let play = nextProps.plays.pop();
      if (play.id < 10) {
        let nextEntries = this.state.entries;
        nextEntries.splice(play.id, 1, play.num);

        let nextResults = this.state.results;
        nextResults.splice(play.id, 1, calculateResult(play.num, this.state.code));

        this.setState({
          entries: nextEntries,
          results: nextResults,
        })
      }
    }
  }
  render() {
    return (
      <div id='game-column' className='column'>
        <h2 id='game-title'>Can you guess the secret code?</h2>
        <div id='game-table'>

          <div className='table-column'>
            <p className='table-column-title'>
              Entries
            </p>
            <table>
              <tbody>
                {Object.keys(this.state.entries).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{this.state.entries[key]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className='table-column'>
            <p className='table-column-title'>
              Results
            </p>
            <table>
              <tbody>
                {Object.keys(this.state.results).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{this.state.results[key]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Game;