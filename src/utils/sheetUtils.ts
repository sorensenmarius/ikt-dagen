export const translateDriveImageLink = (image: string): string => {
  const id = image.replace("https://drive.google.com/open?id=", "");
  return `https://www.googleapis.com/drive/v2/files/${id}?key=${process.env.REACT_APP_SHEETS_API_KEY}&alt=media`;
};
