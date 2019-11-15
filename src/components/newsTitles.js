import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'

const InputGroup = Input.Group

function App() {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('react')
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')

  const fetchNews = () => {
    fetch(url)
    .then(result => result.json())
    .then(data => {
      setNews(data.hits)
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchNews()
  }, [url])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  return (
    <div className="App">
      <h2>News</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup compact>
          <Form.Item>
            <Input 
              placeholder='search' 
              value={searchQuery} 
              style={{width: '95%'}}
              onChange={e => setSearchQuery(e.target.value)}/>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>Search</Button>
          </Form.Item>
        </InputGroup>
      </Form>
      {news.map((n, i) => (<p key={i}><a href={n.url} target='blank'>{n.title}</a></p>))}
    </div>
  );
}

export default App
