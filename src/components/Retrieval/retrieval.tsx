import * as React from 'react'

import CircleImage from '@components/CircleImage/circle-image'
import * as moreJpg from '@images/more.jpg'

import './Retrieval.sass'

interface RetrievalProps {
    images: any
}

interface RetrievalState {
    isActive: boolean,
    isHidden: boolean,
    isHidden2: boolean,
    isNone: boolean,
    isNone2: boolean,
}

class Retrieval extends React.Component<RetrievalProps, RetrievalState> {

    public state: RetrievalState
    private myRef: React.RefObject<HTMLDivElement>
    private myRef2: React.RefObject<HTMLDivElement>
    private imgList1: React.RefObject<HTMLDivElement>
    private imgList2: React.RefObject<HTMLDivElement>
    private footBtn1: React.RefObject<HTMLDivElement>
    private footBtn2: React.RefObject<HTMLDivElement>

    constructor(props: RetrievalProps) {
        super(props)
        this.state = {
            isActive: true,
            isHidden: true,
            isHidden2: true,
            isNone: true,
            isNone2: true,
        }
        this.myRef = React.createRef()
        this.myRef2 = React.createRef()
        this.imgList1 = React.createRef()
        this.imgList2 = React.createRef()
        this.footBtn1 = React.createRef()
        this.footBtn2 = React.createRef()
    }

    public moreImages(){
        if (this.state.isHidden){
            this.setState({
                isHidden: false,
                isNone: false
            })
        }else{
            this.setState({
                isHidden: true,
                isNone: true
            })
        }
    }

    public moreImages2() {
        if (this.state.isHidden2) {
            this.setState({
                isHidden2: false,
                isNone2: false
            })
        } else {
            this.setState({
                isHidden2: true,
                isNone2: true
            })
        }
    }

    public active1() {
        this.imgList1.current.className = "Retrieval-1"
        this.imgList2.current.className = "Retrieval-2"
        this.footBtn1.current.className = "active"
        this.footBtn2.current.className = "no-active"
    }

    public active2() {
        this.imgList1.current.className = "Retrieval-2"
        this.imgList2.current.className = "Retrieval-1"
        this.footBtn1.current.className = "no-active"
        this.footBtn2.current.className = "active"
    }
    
    public componentDidMount(){
        if (this.props.images.get1L() <= 5){
            let more1Dom = this.myRef.current
            more1Dom.parentNode.removeChild(more1Dom)
        }

        if (this.props.images.get2L() <= 5) {
            let more1Dom = this.myRef2.current
            more1Dom.parentNode.removeChild(more1Dom)
        }
        
    }

    public render(){
        return(
            <div className="Retrieval">
                <div className='Retrieval-1' ref={this.imgList1}>
                    {
                        this.props.images.all1().map((i: any) => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={`${this.state.isHidden ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone ? 'circle-image' : 'is-none'}`} ref={this.myRef}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages()}></a>
                    </div>
                </div>
                <div className='Retrieval-2' ref={this.imgList2}>
                    {
                        this.props.images.all2().map((i: any) => (
                            <CircleImage imgPath={`url(${i.bgImage})`} toPage={`retrieval/${i.id}`} noLook={`${this.state.isHidden2 ? i.zzc : ''}`}/>
                        ))
                    }
                    <div className={`${this.state.isNone2 ? 'circle-image' : 'is-none'}`} ref={this.myRef2}>
                        <a className='circle' style={{ backgroundImage: `url(${moreJpg})` }} onClick={() => this.moreImages2()}></a>
                    </div>
                </div>
                <div className="foot-btn">
                    <div className="active" ref={this.footBtn1} onClick={() => this.active1()}>一</div>
                    <div className="no-active" ref={this.footBtn2} onClick={() => this.active2()}>二</div>
                </div>
            </div>
        )
    }
}

export default Retrieval