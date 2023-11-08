import './styles.css';
import React from 'react';

export function HTMLTable() {
  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just like heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  const companies = [
    {
      company: 'Alfred Futterskiter',
      contact: 'Maria Anders',
      country: 'Germany',
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
    },
  ];

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              {' '}
              <th colspan="4">BANDS IN '70s</th>
            </tr>
          </thead>
          <tr>
            <th>Name</th>
            <th>Year Formed</th>
            <th>Albums' amount</th>
            <th>most famous song</th>
          </tr>
          {bands.map((bands, index) => (
            <tr key={index}>
              <td>{bands.band}</td>
              <td>{bands.yearFormed}</td>
              <td>{bands.albums}</td>
              <td>{bands.mostFamousSong}</td>
            </tr>
          ))}
        </table>
      </div>
      <span>
        1. The following data were collected by a group of students as they
        tested four different types of plastics.
      </span>
      <table className="table">
        <thead>
          <tr>
            <th colspan="3">LIST OF COMPANIES</th>
          </tr>
        </thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {companies.map((company, index) => (
          <tr key={index}>
            <td>{company.company}</td>
            <td>{company.contact}</td>
            <td>{company.country}</td>
          </tr>
        ))}
      </table>
      <div>
        Which plastic would be unsafe to use to store products that contain
        acetone?
        <ol type="a">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ol>
      </div>
    </div>
  );
}
