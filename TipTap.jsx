import StarterKit from '@tiptap/starter-kit'
import {useEditor,EditorContent } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
const extensions = [
    StarterKit,
    Underline,
]
const content = ``

const TipTap = ({onEditorContentSave}) => {
    const editor = useEditor({
        extensions,
        content,
    })

    if (!editor) {
        return null
    }
    const handleEditorContent = () => {
        const html = editor.getHTML()
        if (typeof onEditorContentSave === 'function') {
          onEditorContentSave(html)
        } else {
          console.warn('onEditorContentSave is not a function')
        }
      }
      

    return (
        <div>
            <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={() => editor.chain().focus().toggleBold().run()}
                 disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}><strong>B</strong></button>
            
                <button onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}>I</button>

                <button onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}>S</button>

                <button onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive('code') ? 'is-active' : ''}>C</button>

                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>H1</button>

                
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>H2</button>

                
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>H3</button>

                
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>H4</button>

                
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>H5</button>

                
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>H6</button>


                <button onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}>Bullet list</button>

                <button onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}>Ordered list</button>

                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}>Code block</button>

                <button onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}>Underline</button>

                

                
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}>Blockquote</button>

                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={editor.isActive('horizontalRule') ? 'is-active' : ''}>Horizontal rule</button>

                <button onClick={() => editor.chain().focus().setHardBreak().run()}
                className={editor.isActive('hardBreak') ? 'is-active' : ''}>Hard break</button>


                <button onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className={editor.isActive('undo') ? 'is-active' : ''}>Undo</button>

                <button onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className={editor.isActive('redo') ? 'is-active' : ''}>Redo</button>

            </div>

            <div>
            <EditorContent editor={editor} />
        </div>
        <button onClick={handleEditorContent}>Save</button>
        </div>
    )
}  

export default TipTap