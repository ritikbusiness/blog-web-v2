
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Image as ImageIcon,
  Heading1,
  Heading2,
  Link as LinkIcon,
  Code
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageAlt, setImageAlt] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    const content = document.getElementById("editor")?.innerHTML;
    if (content) {
      onChange(content);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setShowImageInput(true);
    }
  };

  const insertImage = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          handleCommand(
            "insertHTML", 
            `<img src="${e.target.result}" alt="${imageAlt || 'Blog image'}" class="my-4 rounded max-w-full" />`
          );
          setShowImageInput(false);
          setSelectedImage(null);
          setImageAlt("");
        }
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="border rounded-md">
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-muted/20">
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("bold")}
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("italic")}
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("underline")}
        >
          <Underline className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-border mx-2" />
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("formatBlock", "<h1>")}
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("formatBlock", "<h2>")}
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-border mx-2" />
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("insertUnorderedList")}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("insertOrderedList")}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("formatBlock", "<blockquote>")}
        >
          <Quote className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-border mx-2" />
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => {
            const url = prompt("Enter URL:");
            if (url) handleCommand("createLink", url);
          }}
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => handleCommand("formatBlock", "<pre>")}
        >
          <Code className="h-4 w-4" />
        </Button>
        <div className="h-4 w-px bg-border mx-2" />
        <label htmlFor="image-upload">
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            className="cursor-pointer"
            as="span"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {showImageInput && selectedImage && (
        <div className="p-4 border-b bg-muted/10">
          <p className="text-sm font-medium mb-2">Image Preview</p>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 relative">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <label htmlFor="image-alt" className="text-sm font-medium block mb-1">
                  Alt Text (for SEO):
                </label>
                <input
                  id="image-alt"
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Describe this image"
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setShowImageInput(false);
                    setSelectedImage(null);
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="button"
                  size="sm"
                  onClick={insertImage}
                >
                  Insert Image
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        id="editor"
        className="p-4 min-h-[400px] focus:outline-none"
        contentEditable
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
      />
    </div>
  );
};

export default RichTextEditor;
