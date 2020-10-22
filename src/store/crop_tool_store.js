const { makeObservable, observable, action } = require("mobx");

const { image64toCanvasRef } = require("../util/images_and_files");

export default class CropToolStore {
  @observable imageSrc;
  @observable.ref crop = { aspect: 16 / 9 };

  constructor() {
    makeObservable(this);
  }

  @action
  onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    // this.imageSrc = URL.createObjectURL(file);
    // console.log({ file });
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => this.setImageSrc(reader.result),
      false
    );
    reader.readAsDataURL(file);
  };

  @action
  setImageSrc = (src) => (this.imageSrc = src);

  @action
  handleCropChange = (crop, percentCrop) => (this.crop = crop);

  handleCropComplete = (crop, percentCrop, canvas) => {
    console.log({ percentCrop, crop, "this.imageSrc": this.imageSrc });
    image64toCanvasRef(canvas, this.imageSrc, crop);
  };

  handleImageLoaded = (imageLoaded) => {
    console.log({ imageLoaded });
  };
}
