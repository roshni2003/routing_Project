import React from 'react';

const Table = () => {
  return (
    <>t
      <table  style={{width:"50%", marginTop:"100px", outline:"1px solid black"}}>
        <tr style={{outline:"1px solid black"}}>
          <th style={{outline:"1px solid black", backgroundColor:"#fae3f1"}}>Products Category</th>
          <th style={{outline:"1px solid black",backgroundColor:"#fae3f1"}}>Brands</th>
          <th style={{outline:"1px solid black",backgroundColor:"#fae3f1"}}>Cutomer policies</th>
        </tr>
        <tr style={{outline:"1px solid black"}}>
          <td style={{outline:"1px solid black"}}>Women Clothing</td>
          <td style={{outline:"1px solid black"}}>Zara</td>
          <td style={{outline:"1px solid black"}}>Contact Us</td>
        </tr>
        <tr style={{outline:"1px solid black"}}>
          <td style={{outline:"1px solid black"}}>Men Clothing</td>
          <td style={{outline:"1px solid black"}}>Adidas</td>
          <td style={{outline:"1px solid black"}}>T&C</td>
        </tr>
        <tr style={{outline:"1px solid black"}}>
          <td style={{outline:"1px solid black"}}>Kids Clothing</td>
          <td style={{outline:"1px solid black"}}>Lakme`</td>
          <td style={{outline:"1px solid black"}}>Grievance Officer</td>
        </tr>
        <tr style={{outline:"1px solid black"}}>
        <td style={{outline:"1px solid black"}}>Home & Living</td>
          <td style={{outline:"1px solid black"}}>Godrej</td>
          <td style={{outline:"1px solid black"}}>Returns</td>
        </tr>
        <tr style={{outline:"1px solid black"}}>
          <td style={{outline:"1px solid black"}}>Beauty</td>
          <td style={{outline:"1px solid black"}}>Levis</td>
          <td style={{outline:"1px solid black"}}>Terms Of Use</td>
        </tr>
      </table>
    </>
  );
};

export default Table;
