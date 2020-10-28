
import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";


import { MDBBtn } from "mdbreact";
import './Search.css';

const Search = () => {
  
    const [seminars, setSeminars] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchResult, setSearchResult] = useState([]);
   



    useEffect(() => {
        findByTitle(); 
        const results = seminars.filter(sem => 
            sem.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setSearchResult(results);
    }, [searchTitle]);


    
    const findByTitle = () => {
        SeminarDataService.get(searchTitle)
            .then(response => {
                setSeminars(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const onChangeSearchTitle = e => {  
        setSearchTitle(e.target.value);
    };


    return (
        <div className="col-md-12 searchInput">
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control form-control-lg mr-sm-2"
                placeholder="Search Seminar by Title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">

             <MDBBtn color="success" onClick={findByTitle} className="btn btn-success myBtn">Save Seminar</MDBBtn>

                
            </div>

        </div>
                {
                    <ul>
                        {searchTitle ? (
                        searchResult.map(item => (
                            <div key={item.id} ><br /><a href={["/semInfo/"] + item.id }> {item.title} </a></div>
                        )))   :  null }
                    </ul>
                }
    </div>
    );


}


export default Search;