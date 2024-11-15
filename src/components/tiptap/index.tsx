import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import MenuBar from './menu-bar'
import './styles.css'

const extensions = [
  Color,
  Document,
  Paragraph,
  Text,
  TextStyle,
  StarterKit,
  Placeholder.configure({
    placeholder: "What's on your mind?",
    // placeholder: ({ node }) => {
    //   if (node.type.name === 'heading') {
    //     return 'What’s the title?'
    //   }

    //   return 'Can you add some further context?'
    // },
  }),
]

const content = '<p></p>'

const Tiptap = ({ onUpdate }: { onUpdate: (value: string) => void }) => {
  return (
    <EditorProvider
      editorContainerProps={{
        className: 'rounded-md border border-input bg-transparent px-3 py-2 shadow-sm min-h-[10rem]',
      }}
      editorProps={{
        attributes: {
          class: 'min-h-[10rem]',
        },
      }}
      onUpdate={(editor) => {
        onUpdate(editor.editor.getHTML())
      }}
      extensions={extensions}
      slotBefore={<MenuBar />}
      content={content}
    />
  )
}

export default Tiptap