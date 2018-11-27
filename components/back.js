import React, { Component } from 'react';
import Link from 'next/link'


export default class Back extends Component {
  render() {
    return (
      <div>

          <Link href="/">
            <a>回到首页</a>
          </Link>
        <style jsx>{`
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </div>
    )
  }
}

