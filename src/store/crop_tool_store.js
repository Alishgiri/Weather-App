const { makeObservable, observable, action } = require("mobx");

const {
  getCroppedImg,
  downloadBase64File,
  // getBase64ImageFromUrl,
  extractImageFileExtensionFromBase64,
} = require("../util/images_and_files");

export default class CropToolStore {
  @observable imageSrc;
  @observable imageRef;
  @observable croppedBase64ImageSrc;
  @observable.ref crop = { aspect: 16 / 9 };

  constructor() {
    makeObservable(this);
  }

  @action
  onDrop = (acceptedFiles) => {
    this.croppedBase64ImageSrc = null;
    const file = acceptedFiles[0];

    // TO GET IMAGE SRC USE THIS
    this.imageSrc = URL.createObjectURL(file);
    // OR
    // const reader = new FileReader();
    // reader.addEventListener(
    //   "load",
    //   () => this.setImageSrc(reader.result),
    //   false
    // );
    // reader.readAsDataURL(file);
  };

  @action
  setImageSrc = (src) => (this.imageSrc = src);

  @action
  handleCropChange = (crop, percentCrop) => (this.crop = crop);

  @action
  setcroppedBase64ImageSrc = (src) => (this.croppedBase64ImageSrc = src);

  @action
  handleImageLoaded = (image) => (this.imageRef = image);

  handleCropComplete = async (crop, percentCrop, canvasRef) => {
    console.log({ percentCrop, crop, "this.imageSrc": this.imageSrc });
    const base64Image = await getCroppedImg(this.imageRef, crop, canvasRef);
    this.setcroppedBase64ImageSrc(base64Image);
  };

  downloadCroppedImage = (event) => {
    event.preventDefault();
    const fileExtension = extractImageFileExtensionFromBase64(
      this.croppedBase64ImageSrc
    );
    const fullFileName = "untitled." + fileExtension;
    downloadBase64File(this.croppedBase64ImageSrc, fullFileName);
  };

  @action
  onChangeTextField = async (event) => {
    const imageUrl = event.target.value;
    // https://pbs.twimg.com/profile_images/558329813782376448/H2cb-84q_400x400.jpeg

    // const imageSrc = getBase64ImageFromUrl(imageUrl);
    // console.log({ imageUrl, imageSrc });
    this.toDataURL(imageUrl, (base64dataUrl) => {
      console.log({ base64dataUrl });
      this.setImageSrc(base64dataUrl);
    });
  };

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
}
