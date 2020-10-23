// Convert Image url to Base64
export function getBase64ImageFromUrl(imgUrl) {
  const img = document.createElement("img");
  const canvas = document.createElement("canvas");

  img.crossOrigin = "anonymous";
  img.src = imgUrl;
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

/**
 Base64 Image to Canvas with a Crop
 * @param {String or Base64} image - Image Link/File
 * @param {Object} crop - crop Object
 * @param {String} fileName - Name of the returned file in Promise
 */
export function getCroppedImg(image, crop, canvasRef, fileName) {
  const canvas = canvasRef; //document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
  return new Promise((resolve, reject) => {
    // As Base64 string
    const base64Image = canvas.toDataURL("image/jpeg");
    resolve(base64Image);

    // As a blob
    // canvas.toBlob(
    //   (blob) => {
    //     if (!blob) return;
    //     blob.name = fileName;
    //     resolve(blob);
    //   },
    //   "image/jpeg",
    //   1
    // );
  });
}

// Convert a Base64-encoded string to a File object
export function base64StringtoFile(base64String, filename) {
  var arr = base64String.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring(
    "data:image/".length,
    base64Data.indexOf(";base64")
  );
}

// Download a Base64-encoded file
export function downloadBase64File(base64Data, filename) {
  const ele = document.createElement("a");
  ele.setAttribute("href", base64Data);
  ele.setAttribute("download", filename);
  ele.style.display = "none";
  document.body.appendChild(ele);
  ele.click();
  document.body.removeChild(ele);
}
