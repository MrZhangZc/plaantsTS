const LeftDrawer = {
    drawersLeft: [
        {id: 1, name: '张智超' , Content: '1'},
        {id: 2, name: '张智超' , Content: '2'},
        {id: 3, name: '张智超' , Content: '3'},
        {id: 4, name: '张智超' , Content: '4'},
        {id: 5, name: '张智超' , Content: '5'},
        {id: 6, name: '张智超' , Content: '6'},
        {id: 7, name: '张智超' , Content: '7'},
        {id: 8, name: '张智超' , Content: '8'},
    ],
    drawersMiddle: [
        { id: 9, name: 'workspace', Content: '9'},
        { id: 10, name: 'workspace', Content: '10'},
        { id: 11, name: 'workspace', Content: '11'},
        { id: 12, name: 'workspace', Content: '12'},
        { id: 13, name: 'workspace', Content: '13'},
        { id: 14, name: 'workspace', Content: '14'},
        { id: 15, name: 'workspace', Content: '15'},
        { id: 16, name: 'workspace', Content: '16'},
        { id: 17, name: 'workspace', Content: '17'},
        { id: 18, name: 'workspace', Content: '18'},
    ],
    drawersRight: [
        { id: 19, name: 'folder', Content: '19'  },
        { id: 20, name: 'folder', Content: '20'  },
        { id: 21, name: 'folder', Content: '21'  },
        { id: 22, name: 'folder', Content: '22'  },
        { id: 23, name: 'folder', Content: '23'  },
        { id: 24, name: 'folder', Content: '24'  },
    ],
    allLfet: function () { return this.drawersLeft },
    allMiddle: function () { return this.drawersMiddle },
    allRight: function () { return this.drawersRight },
    all: function () { return this.drawersLeft.concat(this.drawersMiddle, this.drawersRight)}
}

export default LeftDrawer