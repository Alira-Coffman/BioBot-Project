import React, {useState} from 'react'

import './SearchBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
    InputGroup,
    Input,
    Button,
   } from 'reactstrap';
import SearchResults from '../SearchResults/SearchResults';

function SearchBar(){

    const [kitID, setKitID] = useState(''); 
    
    

    return (
      <div className="SearchBar">
        <InputGroup className ="mx-auto">
            <Input placeholder='Please enter at least two values! This will help us better assist you.' value ={kitID} onChange={e => setKitID(e.target.value)}/>
            {/* <Button color='primary'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button> */}
        </InputGroup>
        <SearchResults kit={kitID}/>
      </div>
    );
  };

export default SearchBar;