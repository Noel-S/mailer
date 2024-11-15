import { useCurrentEditor } from "@tiptap/react"
import { Button } from "../ui/button"
import { Bold, Code, CodeSquare, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Italic, List, ListOrdered, Redo, SeparatorHorizontal, SeparatorVertical, Strikethrough, Text, TextQuote, Undo } from "lucide-react"
import { Separator } from "../ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useState } from "react"

enum HeadingLevel {
  H1 = "1",
  H2 = "2",
  H3 = "3",
  H4 = "4",
  H5 = "5",
  H6 = "6"
}

const MenuBar = () => {
  const { editor } = useCurrentEditor()
  const [heading, setHeading] = useState<HeadingLevel | string>()

  if (!editor) {
    return null
  }

  return (
    <div className="flex h-7 items-center space-x-1">
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('bold') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('itelic') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <Italic />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('strike') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <Strikethrough />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('code') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
      >
        <Code />
      </Button>
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        Clear nodes
      </button> */}
      <Separator orientation="vertical"  />
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('paragraph') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <Text />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant={editor.isActive('heading') ? 'secondary' : 'ghost'} 
          >
            <Heading />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Heading</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={editor.isActive('heading') ? heading : undefined } onValueChange={setHeading}>
            <DropdownMenuRadioItem value={HeadingLevel.H1} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
              <Heading1 />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={HeadingLevel.H2} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
              <Heading2 />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={HeadingLevel.H3} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
              <Heading3 />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={HeadingLevel.H4} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
              <Heading4 />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={HeadingLevel.H5} onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}>
              <Heading5 />
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={HeadingLevel.H6} onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}>
              <Heading6 />
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('bulletList') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('orderedList') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('codeBlock') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <CodeSquare />
      </Button>
      <Button
        type="button"
        size="icon"
        variant={editor.isActive('blockquote') ? 'secondary' : 'ghost'} 
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <TextQuote />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <SeparatorHorizontal />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <SeparatorVertical />
      </Button>
      <Separator orientation="vertical" />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <Undo />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <Redo />
      </Button>
      {/* <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
      >
        <ALargeSmall color={'#958DF1'} />
      </Button> */}
    </div>
  )
}

export default MenuBar