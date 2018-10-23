import * as React from 'react'

import './list-content.sass'

import drawerDate from '@date/drawer'

interface ListContentState {
    content: string
}

class ListContent extends React.Component<{},  ListContentState > {

    public state: ListContentState

    constructor(props: any) {
        super(props)
        this.state = {
            content : ''
        }
    }
    
    render(){
        return(
            <div className="list-content">
                {this.state.content}
            </div>
        )
    }

    componentDidMount() {
        drawerDate.all().map((i: any) => {
            if (i.id.toString() === document.location.hash.split('/')[2]){
                this.setState({
                    content: i.Content
                })
            }
        })
        
    }
}

export default ListContent