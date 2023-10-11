import React, { useEffect, useState } from 'react';

const Table2 = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=97498dead7f62c325c2a40627936b914&language=en-US&page=1');
  //       const result = await response.json();
        
  //       if (result.results) {
  //         setData(result.results);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const headers = ['ID', 'Title', 'Overview'];

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <table style={{ width: "50%", marginTop: "10px", outline: "3px solid black" }}>
        <thead style={{ outline: "1px solid black" , backgroundColor:"#32a0a8"}}>
          <tr style={{ outline: "1px solid black" }}>
            {headers.map(header => (
              <th key={header} style={{ outline: "1px solid black" }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ outline: "1px solid black" }}>
          {data.map(item => (
            <tr key={item.id} style={{ outline: "1px solid black" }}>
              <td style={{ outline: "1px solid black" }}>{item.id}</td>
              <td style={{ outline: "1px solid black" }}>{item.title}</td>
              <td style={{ outline: "1px solid black" }}>{item.overview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
