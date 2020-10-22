import Dropzone from "react-dropzone";
import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { inject, observer } from "mobx-react";
import { withStyles } from "@material-ui/core";
import { Col, Row, Container } from "react-bootstrap";

const styles = (theme) => ({
  dropzone: {
    height: 100,
    borderRadius: 10,
    borderColor: "grey",
    borderStyle: "dashed",
  },
});

@inject("cropToolStore")
@observer
class ImageCrop extends Component {
  constructor(props) {
    super(props);
    this.imgPreviewCanvasRef = React.createRef();
  }

  render() {
    const { classes, cropToolStore } = this.props;
    const {
      crop,
      onDrop,
      imageSrc,
      handleCropChange,
      handleImageLoaded,
      handleCropComplete,
    } = cropToolStore;
    return (
      <Container className="h-100" fluid>
        <h1 className="mt-3">Image Crop Tool</h1>
        <Row className="w-100">
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className={[
                  classes.dropzone,
                  "d-flex w-100 m-4 justify-content-center align-items-center",
                ].join(" ")}
              >
                <input {...getInputProps()} />
                <h6>
                  Drag 'n' drop an image here, or click to select an image.
                </h6>
              </div>
            )}
          </Dropzone>
        </Row>
        {imageSrc && (
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <ReactCrop
                crop={crop}
                src={imageSrc}
                onChange={handleCropChange}
                onComplete={(crop, pixelCrop) =>
                  handleCropComplete(
                    crop,
                    pixelCrop,
                    this.imgPreviewCanvasRef.current
                  )
                }
                onImageLoaded={handleImageLoaded}
              />
            </Col>
            <Col>
              <h5>Crop Preview</h5>
              <canvas ref={this.imgPreviewCanvasRef}></canvas>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(ImageCrop);
