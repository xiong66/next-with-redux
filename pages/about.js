import React, {Component} from "react";
import { connect } from "react-redux";

class Page extends Component {
    // static getInitialProps ({ store }) {
    //     return {  }
    // }
    render() {
        return (
            <div>
                about页面
                <h3>总数： {this.props.count}</h3>
                <div>
                    <button onClick={this.props.handleAddCount}>数+1</button>
                    <button onClick={this.props.handleSubCount}>数-1</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count : state.count
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddCount() {
            const action = {
                type: 'add_count'
            }
            dispatch(action)
        },
        handleSubCount() {
            const action = {
                type: 'sub_count'
            }
            dispatch(action)
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Page)