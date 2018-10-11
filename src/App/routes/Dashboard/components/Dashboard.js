import React, { Component } from "react";
import Page from "../../../components/Page";
import "./DashboardStyles.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // showDevApp:false
    };
  }
  componentDidMount(){
    this.props.functionGetNews();
  }
  render() {
    return (
      <Page id="dashboard">
       {/*NORMAL USER**/}
       {
        this.props.currentUser.role !== "admin"  &&
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <a href="/profile" className="btn userBtn">Edit Information</a>
              </div>
              <div className="col-6">
                <button onClick={()=>this.props.showArticleForm(true)} className="btn userBtn">Add Article</button>
              </div>
            </div>
            {
              this.props.showForm && 
            <div className="addArticle">
            <form onSubmit={(ev)=>this.props.saveArticle(ev)}>
            <label className="addLabel">
              Article title
            </label>
          <input
            className="form-control editInput"
            type="text"
            name="title"
            onChange={(ev)=>this.props.getInput({
              key:"title",
              value:ev.target.value
            })}
            />
            <label className="addLabel">
              Article Content
            </label>
            <textarea
              className="form-control articleContent"
              type="text"
              name="text"
              onChange={(ev)=>this.props.getInput({
                key:"text",
                value:ev.target.value
              })}
            >
            </textarea>
            <button className="btn articleBtn">Submit</button>
            </form>
          </div>
            }



            {/* //DISPLAY MORE OF AN ARTICLE COULD BE INSIDE A MODAL */}
              {
                this.props.selectedArticle.hasOwnProperty("title") &&
                <div>
                  <button onClick={()=>this.props.selectNews(null)}>Close Modal</button>
                  <h2>{this.props.selectedArticle.title}</h2>
                  <p>Author: {this.props.selectedArticlectedArticle.createdBy}</p>
                  <p>{this.props.selectedArticle.text}</p>
                </div>
              }
            </div>
        </div>
      }

    {/*ADMIN STAFF**/}
        {
          this.props.currentUser.role === "admin"  && 
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="feedReq">News Feed Requests</h2>

                {
                  this.props.newsFeed.map((news, index)=>{
                    const label = news.approved ? "Disapprove" : "Approve";
                    return(
                      <div key={index}>
                        <div className="row">
                          <div className="col-6">
                            <h3 className="feedTitle">{news.title}</h3>
                          </div>
                          <div className="col-6">
                            <label className="feedLabel">{label}</label>
                            <input type="checkbox" name="approved" checked={news.approved} onClick={()=>this.props.toggleApprove({
                              title:news.title,
                              text:news.text,
                              createdAt:news.createdAt,
                              approved:!news.approved},
                              index)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <div className="col-12">
                  <button onClick={()=>this.props.showArticleForm(true)} className="btn userBtn">Add Article</button>
                </div>
                {
                this.props.showForm && 
              <div className="addArticle">
              <form onSubmit={(ev)=>this.props.saveArticle(ev)}>
              <label className="addLabel">
                Article title
              </label>
            <input
              className="form-control editInput"
              type="text"
              name="title"
              onChange={(ev)=>this.props.getInput({
                key:"title",
                value:ev.target.value
              })}
              />
              <label className="addLabel">
                Article Content
              </label>
              <textarea
                className="form-control articleContent"
                type="text"
                name="text"
                onChange={(ev)=>this.props.getInput({
                  key:"text",
                  value:ev.target.value
                })}
              >
              </textarea>
              <button className="btn articleBtn">Submit</button>
              </form>
            </div>
              }
              </div>
            </div>
          </div>
        }

      </Page>
    );
  }
}

export default Dashboard;