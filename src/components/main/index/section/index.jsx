import React, { PureComponent } from 'react';
import { CityWrap } from "./styled"


// isCity={this.state.isCity}
                    // cityList={this.props.cityList}
                    // handleCity={this.props.handleCity.bind(this)

export class Banner extends PureComponent {



    componentWillMount() {
        // this.setState({listData:this.createList()})
    }
    render() {
        return (
            <div>
                <h1>lubo</h1>
            </div>
        )
    }
}



export class City extends PureComponent {
    render() {
        // console.log(this.props);
        return this.props.isCity ? (
            <CityWrap>
                <div className="left">
                    <ul>
                      {
                            this.props.cityList.map((item, index) => (
                                <li key={index}>
                                    <h1>{item.id}</h1>
                                    <ul>
                                        {
                                            item.list.map((it,dex)=>(
                                                <li className="citys" key={dex} onClick={this.props.handleCity.bind(this,it)}>
                                                    {it.name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        } 
                    </ul>
                </div>
                <div className="right">
                    <ul>
                       {
                            this.props.cityList.map((item, index) => (
                                <li key={index}>{item.id}</li>
                            ))
                        } 
                    </ul>
                </div>
            </CityWrap>
        ) : (
                <button onClick={this.props.handleCity.bind(this)}>city{this.props.currentCity.name}</button>
            )
    }
}




