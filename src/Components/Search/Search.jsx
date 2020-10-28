
import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { MDBCol,MDBIcon } from "mdbreact";



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
        <div>
            <div className="container inline">
                <MDBCol md="12">
                    <div className="input-group md-form form-sm form-1 pl-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text green lighten-3" id="basic-text1">
                                <MDBIcon className="text-black" icon="search" />
                            </span>
                        </div>
                        <input className="form-control my-0 py-1"
                            type="text" placeholder="Search Seminar by Title..."
                            aria-label="Search"
                            value={searchTitle}
                            onChange={onChangeSearchTitle} />
                    </div>
                </MDBCol>


            </div>
            {
                <ul>
                    {searchTitle ? (
                        searchResult.map(item => (
                            <div key={item.id} ><br /><a href={["/semInfo/"] + item.id}> {item.title} </a></div>
                        ))) : null}
                </ul>
            }
        </div>
    );


}


export default Search;
/*
<MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchTitle}
        onChange={onChangeSearchTitle}/>
      </MDBFormInline>
    </MDBCol> */