import React, { Component, Fragment } from 'react'
import app from '../firebase';

class feeback extends Component {

    componentDidMount(){
        this.getData()
    }

    getCSVFile = (tableData, columnData, fileName)=>{
        let csv = columnData.filter(ele => ele.id !== '').sort((a, b) => {
            if (a.id < b.id) { return -1; }
            if (a.id > b.id) { return 1; }
            return 0;
          }).map(ele => ele.label).join() + '\n'
          tableData.map(ele => {
            const filtered = Object.keys(ele).filter(ele => ele !== 'id').sort()
            filtered.map((key, ind) => csv += `${ele[key]}${(filtered.length - 1) === ind ? '\n' : ','}`)
          })
          let hiddenElement = document.createElement('a')
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv)
          hiddenElement.target = '_blank'
          hiddenElement.download = `${fileName}.csv`
          hiddenElement.click()

    }


    getData = () => {
        let feedbacks = []
        app.database().ref(`feebacks/`).once('value', (snapshot) => {
            for (let key in snapshot.val()) {
                feedbacks.push(snapshot.val()[key])
            }
            this.getCSVFile(feedbacks,['Age Group', 'Full Name','Nationality','Code', 'Number'],'feedback')              

        })
    }
    render() {
        return (
            <Fragment>
                <h1>Downloading registration data....</h1>
            </Fragment>
        )
    }
}
export default feeback