import React from 'react';
import Wrapper from './FlexWrapper';

/* data format for scores
[{"name":"test","score":100},
 {"name":"test2","score":50},
 {"name":"test3","score":75},
 {"name":"test4","score":7}]
*/

const Scores = ({ data }) => (
  <Wrapper>
    <table>
      <tbody>
        {Object.keys(data).map(key => (
          <tr key={key}>
            <td>{data[key].name}</td>
            <td>{data[key].score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Wrapper>
)


export default Scores