
import React from 'react'
import Gx, { config } from '../src/Gx'

const css = `
code, pre, samp, .mono { font-family: 'Roboto Mono', monospace }
.Example .Gx {
  outline: 1px solid #07c;
}
@media screen and (min-width:512px) {
  .sm-right-align { text-align: right }
}
.b2 { border: 2px solid }
.b3 { border: 3px solid }
.black { color: #111 }
.white { color: #fff }
.bg-black { background-color: #111 }
.bg-white { background-color: #fff }
#carbonads {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
  text-align: left;
  max-width: 320px;
}
#carbonads a,
#carbonads a:hover {
  text-decoration: none;
  color: inherit;
}
#carbonads span { display: block }
#carbonads > span::before,
#carbonads > span::after {
  content: '';
  display: table;
}
#carbonads > span::after {
  clear: both;
}
.carbon-img {
  float: left;
  margin-right: .5em;
}
.carbon-img > img { display: block }
.carbon-text { overflow: hidden }
.carbon-poweredby {
  float: left;
  margin-top: .25em;
  opacity: 0.5;
}
`.replace(/\n/g, '')

const Header = ({ description, ...props }) => (
  <header className='py4'>
    <div className='flex flex-column items-center justify-between p2 mb4 b3'
      style={{ width: 192, height: 256 }}>
      <div className='' />
      <h1 className='m0' style={{ fontSize: 56 }}>Gx</h1>
      <div>Grid System</div>
    </div>
    <div className='flex flex-wrap'>
      <div className='flex-auto'>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <a href='https://travis-ci.org/jxnblk/gx'
          className='mr2'
          style={{ display: 'inline-block', height: 20 }}>
          <img src='https://travis-ci.org/jxnblk/gx.svg?branch=master'
            style={{ display: 'block' }} />
        </a>
        <a href="https://twitter.com/share"
          className="twitter-share-button"
          data-text='Minimal React grid system'
          data-via='jxnblk'
          children='Tweet' />
        <pre>npm i gx</pre>
      </div>
      <div>
        <script
          async
          type='text/javascript'
          src={`//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom`}
          id='_carbonads_js' />
      </div>
    </div>
  </header>
)

const Box = (props) => (
  <div {...props}
    className='Box'
    style={{
      padding: 32
    }} />
)

const Container = (props) => (
  <div {...props}
    className='Container'
    style={{
      maxWidth: 1024,
      margin: 'auto'
    }} />
)

const Examples = () => (
  <section id='examples' className='Examples'>
    <h2>
      <a href='#examples'>
        Examples
      </a>
    </h2>
    <div className='Example py2'>
      <Gx>Default Gx</Gx>
      <Gx>Default Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx col={4}>Col 4 Gx</Gx>
      <Gx col={4}>Col 4 Gx</Gx>
      <Gx col={4}>Col 4 Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx col={3}>Col 3 Gx</Gx>
      <Gx col={3}>Col 3 Gx</Gx>
      <Gx col={3}>Col 3 Gx</Gx>
      <Gx col={3}>Col 3 Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx col={2}>Col 2 Gx</Gx>
      <Gx col={2}>Col 2 Gx</Gx>
      <Gx col={2}>Col 2 Gx</Gx>
      <Gx col={2}>Col 2 Gx</Gx>
      <Gx col={2}>Col 2 Gx</Gx>
      <Gx col={2}>Col 2 Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
      <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
      <Gx breakpoint={512}>Breakpoint 512 Gx</Gx>
    </div>
    <div className='Example py2'>
      <Gx col={4}>
        <h3>Col 4</h3>
      </Gx>
      <Gx col={8}>
        <h3>Col 8</h3>
        <Gx>Nested Gx</Gx>
        <Gx>Nested Gx</Gx>
      </Gx>
    </div>
    <div className=''>
      <Gx col={5} breakpoint={1120}>
        <div className='Example py2' style={{ maxWidth: 480 }}>
          <h3>480px Container</h3>
          <Gx col={6}>Col 6</Gx>
          <Gx col={6}>Col 6</Gx>
        </div>
      </Gx>
      <Gx col={7} breakpoint={1120}>
        <div className='Example py2' style={{ maxWidth: 640 }}>
          <h3>640px Container</h3>
          <Gx col={6}>Col 6</Gx>
          <Gx col={6}>Col 6</Gx>
        </div>
      </Gx>
    </div>
  </section>
)

const Footer = () => (
  <footer className='py4'>
    <Gx>
      <a href='//github.com/jxnblk/gx' className='bold black text-decoration-none'>GitHub</a>
    </Gx>
    <Gx>
      <div className='sm-right-align'>
        <a href='//jxnblk.com' className='bold black text-decoration-none'>Made by Jxnblk</a>
      </div>
    </Gx>
  </footer>
)

/*
 *
 *   Build badge
 *   GitHub link
 *   npm link
 *   tweet button
 *   examples
 *     nested
 *     element query explaination
 *   config
 *
 */

class Root extends React.Component {

  render () {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Gx</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <link href='https://npmcdn.com/basscss-basic/index.css' rel='stylesheet' />
          <link href='https://npmcdn.com/basscss@8.0.0/css/basscss.min.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:400' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
            <Box>
              <Header {...this.props} />
              <Examples />
              <Footer />
            </Box>
          <script dangerouslySetInnerHTML={{ __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");' }} />
        </body>
      </html>
    )
  }
}

export default Root

