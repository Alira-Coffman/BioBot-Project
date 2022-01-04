import React, { useEffect , useState} from 'react';

import { Modal,ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

import './SearchResults.css';


function SearchResults(props){
    const  {kit} = props;
    const [modal,setModal] = useState(false);
   
    function toggle() {
        setModal(!modal);
        // updateOptionsState('');
    } 

   
    const [matchedKits, updateMatchedKits] = useState([]);

    const [optionsState, updateOptionsState] = useState('');


    useEffect(function openModal()
    {
        if(optionsState !== undefined && optionsState.length != '')
        {
            setModal(!modal);
            console.log('TOGGLING');
            console.log({optionsState})
        }
        

    }, [optionsState])
    console.log("kit" , kit);
    useEffect(function effectFunction() {
        if(kit.length >= 2)
        {
            async function fetchMatchKits() {
                let fetchURL ='http://127.0.0.1:5000/api/kits/' + kit;
                const response = await fetch(fetchURL);
                const json = await response.json();
                console.log('response: ', json);
               // const [matchedKits] = json.message
                updateMatchedKits(json.message);
                console.log('state:' , matchedKits);
            }
            fetchMatchKits();
        }
        
        
    }, [kit])

    
    
   
        return (
            <div className="SearchResults">
              
                <div className='resultTable'>
                 
                  { (matchedKits && matchedKits.length) 
                  ? (<select className = 'kitList' value ={optionsState} onChange={e => {updateOptionsState(e.target.value);}} size={matchedKits.length + 1}> <option disabled> Please Choose A Matching Kit</option>
                  {matchedKits.map(item => (
                  <option id={item.id} value={item.shipping_tracking_code} key={item.shipping_tracking_code}>{item.label_id}</option>))}
                  </select>) 
                  : ((<div className='noList'><p>You have not endered a valid Kit ID. If this is a mistake, please contact Customer Support</p></div>) )} 
                </div>
                <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 200 }}>
                    <ModalHeader>Your Tracking Information</ModalHeader>
                <ModalBody>
               
                    Shipping Tracking Code = {optionsState}
                 
                 <p>NOTE: This is where I would want to use the <a href="https://developer.fedex.com/api/en-us/catalog/track/docs.html#operation/TrackingDocuments" >FedEx API  </a> instead of forcing the user to use a link with the tracking nubmer
                 This would limit the number of clicks a user would need to do to gain information. I would make the link accessible, but not required to be used.</p>
                </ModalBody>
                
            </Modal>
            </div>

            
          );
        
    
    };
    

export default SearchResults;