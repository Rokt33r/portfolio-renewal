import React from 'react'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const {
      isActive
    } = this.state
    this.setState({
      isActive: !isActive
    })
  }

  render () {
    const {
      title,
      contents,
    } = this.props
    return (
      <li className='list-item'>
        <h2>
          <button
            type='button'
            onClick={this.handleClick}
          >
            {title}
          </button>
        </h2>
        <ul className={this.state.isActive ? 'active' : ''}>
          {
            contents.map((content, index) => {
              return (
                <li key={index}>
                  {content}
                </li>
              )
            })
          }
        </ul>
        <style jsx>{`
          h2 {
            font-size: 15px;
            line-height: 1.45;
          }
          .list-item ul {
            display: none;
            margin-bottom: 24px;
          }

          .list-item ul.active {
            display: block;
          }

          button {
            border-bottom: 2px solid;
            margin-bottom: 4px;
          }

          @media screen and (min-width: 960px) {
            h2 {
              font-size: 20px;
              line-height: 1.333333333;
            }
          }
        `}</style>
      </li>
    )
  }
}

export default List