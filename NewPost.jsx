import TipTap from '../TipTap'
import ShowPost from './ShowPost'
import { useState } from 'react'



const NewPost = () => {
  const [htmlContent, setHtmlContent] = useState('')
  const handleEditorContentSave = (html) => {
    //console.log(html)
    setHtmlContent(html)
  }
  return (
    <>
  <TipTap onEditorContentSave={handleEditorContentSave} />
  <hr />
  <ShowPost content={htmlContent} />
    </>
  )
}

export default NewPost