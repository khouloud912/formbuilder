import React, { Component } from "react";
import {getFormID, getFormURL} from "../utils";
import axios from 'axios';
import { Table , InputGroup , FormControl } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
//import FilterResults from 'react-filter-search';


import {DropdownButton, MenuItem}  from "react-bootstrap";
/* win bech nchouf el hajet el submitted */
export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        records:[{}],
        filtereddata:[{}],
        filtredValue: '',
        offset: 0,
        perPage: 5,
        currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }


 
  componentDidMount() {
  //  this.formID = getFormID(adminToken);
   // this.props.getRecords();
   this.fetchdata();
  }


  fetchdata=()=>{
    console.log(this.props.records);
    //this.props.loadSchema(this.formID);
   return axios.get("http://localhost:3030/getFields")
    .then(( response ) => {
        console.log("records",response.data.fields);
        this.setState({ records: response.data.fields});
        this.setState({ filtereddata: response.data.fields});
        const data = response.data.fields;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

        const postData = slice.map(({ thumburl }) => <img src={thumburl} />);
        console.log("filtereddata",postData);
        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          filtereddata:postData
      })
  });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.fetchdata()
    });
};

  handleSearch = (e) => {
    console.log(e.target.value);
    // this.setState({
    // filtredValue: e.target.value
    // })
    let filteredrecords = this.state.records.filter(element => element.titleform.toLowerCase().includes(e.target.value));
    if ( filteredrecords === null ){
      this.setState({
        filtereddata:this.state.records
      })
      }else{
        this.setState({
          filtereddata:filteredrecords
       })
      }
  }

  
  render() {
    const properties = this.props.schema.properties;
    const title = this.props.schema.title;
    console.log("this is title",title);
  //  const ready = Object.keys(properties).length !== 0;
    //const schemaFields = this.props.uiSchema["ui:order"];
    //const formUrl = getFormURL(this.formID);
    return(
      <div >
        <h3>all the responses submitted from user  </h3>
        <InputGroup className="mb-3" onChange={this.handleSearch}>
        <FormControl aria-label="Text input with checkbox" />
        <br/>
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        <br/>
        <br/>
        <br/>

      </InputGroup>
        {this.state.filtereddata.map((itemfiltered)=>(

        <Table striped bordered hover>
        <thead>
      <tr>
        <th>form title</th>
        <th>short description</th>
            { itemfiltered.objects && itemfiltered.objects.map((obj)=>(
            <th>{obj.nom}</th>
      ))}
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>{itemfiltered.titleform}</td>
        <td>{itemfiltered.description}</td>
           { itemfiltered.objects && itemfiltered.objects.map((obj)=>(
            <th>{obj.valeur}</th>
      ))}  
      </tr>
    </tbody>
    </Table>
        ))
        }
          
      </div>
      );    
  }
}
