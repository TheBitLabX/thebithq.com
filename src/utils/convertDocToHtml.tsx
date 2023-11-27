// utils/importDocx.ts
import mammoth from "mammoth";

const importDocx = (
  file: File,
  setContent: (content: string) => void
): void => {
  const reader = new FileReader();

  reader.onload = async (event: ProgressEvent<FileReader>) => {
    const arrayBuffer = event.target?.result as ArrayBuffer;
    const result = await mammoth.convertToHtml({ arrayBuffer });
    setContent(result.value);
  };

  reader.readAsArrayBuffer(file);
};

export default importDocx;
