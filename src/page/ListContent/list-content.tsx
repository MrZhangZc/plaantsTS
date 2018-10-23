import * as React from 'react'

import './list-content.sass'

import Header from '@components/Header/header'
import drawerDate from '@date/drawer'

interface ListContentState {
    content: string,
    imgPath: string
}

class ListContent extends React.Component<{},  ListContentState > {

    public state: ListContentState

    constructor(props: any) {
        super(props)
        this.state = {
            content : '',
            imgPath : ''
        }
    }
    
    render(){
        return(
            <div className="list-content">
                <Header />
                <div className="content-image" style={{ backgroundImage: `url(${this.state.imgPath})` }}></div>
                <p className="content-zzc">
                    {this.state.content}
                </p>
            </div>
        )
    }

    componentDidMount() {
        drawerDate.all().map((i: any) => {
            if (i.id.toString() === document.location.hash.split('/')[2]){
                this.setState({
                    content: i.Content,
                    imgPath: i.bgPath
                })
            }
        })
        
    }
}

export default ListContent