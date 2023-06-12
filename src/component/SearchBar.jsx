import React from 'react'
import styled from "styled-components";
import Logo from "./iconpng.png"
import BgImg from "./bg-img.png"
import Search from "./search.png"
import "../App.css"


const Navbar = styled.div`display: flex;
background-color: #8CA0D7;
height:4rem;
justify-content:center;
align-items:center;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CoverImage = styled.img`
  height: 30px;
`;
const BackImage = styled.div`height:20rem;
    background-image: url(${BgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;`

const SearchContainer = styled.div`
  height:10rem;
  width:50%;
  background-color:#8CA0D7;
  border:4px solid white;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
position:absolute;
top:18rem
`

function SearchBar() {
  return (
    < div className="header-container">
      <Navbar>
        <CoverImage src={Logo} alt='' />
        <h1 className='logo-name'>RENO <span className='logo-name2'>RECIPE</span></h1>
      </Navbar>
      <BackImage />
      <div className='contain'>
        <SearchContainer>
          <h1 className='search-title'>
            what would you like to cook?
          </h1>
          <div>
            <input type="text" name="" id="" className='input' />
            <img src={Search} alt="" srcset="" className='search-icon'/>
          </div>
        </SearchContainer>
      </div>


    </div>


  )
}

export default SearchBar