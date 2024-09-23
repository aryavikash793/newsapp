import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div>
                <div className="card">
                    {/* <img src={imageUrl} className="card-img-top" alt="..."/> */}
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}} >
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        {/* <a href="/newsdetail/" className="btn btn-sm btn-primary">Read More</a> */}
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem