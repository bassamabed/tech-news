import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Page from "../../../components/Page";
import "./HomeStyles.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // showDevApp:false
    };
  }
  componentDidMount(){
    console.log(this.props.translations);
    this.props.functionGetNews();
  }
  render() {
    return (
      <Page>
        <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="textHead">Welcome to TechNews</h1>
            </div>
            <div className="col-12">
              <p className="textSub">To continue please Log in from <a href="/login">Here</a> or <a href="/register">register</a> if you don't have an account</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="newsHead">News Feed</h2>

              {
                this.props.newsFeed.map((news, index)=>{
                  if(news.approved){
                    return(
                      <div key={index} onClick={()=>this.props.selectNews(news)}>
                        <h3 className="feedArticle">{news.title}</h3>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
        {
          this.props.selectedArticle.hasOwnProperty("title") &&
                <Modal className="homeModal" isOpen>
                  <ModalHeader>{this.props.selectedArticle.title}</ModalHeader>
                  <ModalBody>
                    {this.props.selectedArticle.text}
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={()=>this.props.selectNews({})}>Close</Button>
                  </ModalFooter>
                </Modal>
        }
        </div>
      </Page>
    );
  }
}

export default HomePage;