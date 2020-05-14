import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Callout = styled.p`
  padding: 1.3rem;
  padding-left: 3.8rem;
  background-color: whitesmoke;
  margin-bottom: 1.5rem;
  position: relative;
`

const Emoji = styled.span`
  padding-right: 0.5rem;
  font-family: 'apple color emoji', 'segoe ui emoji', 'noto color emoji',
    'android emoji', 'emojisymbols', 'emojione mozilla', 'twemoji mozilla',
    'segoe ui symbol';
  display: block;
  position: absolute;
  left: 1.3rem;
  top: 1.3rem;
`

const Component = ({ emoji, text }) => {
  return (
    <Callout>
      <Emoji>{emoji}</Emoji> {text}
    </Callout>
  )
}

Component.defaultProps = {
  emoji: `💡`,
  text: `This is a callout.`,
}

Component.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
}

export default Component
