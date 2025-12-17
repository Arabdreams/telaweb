export const IMAGE_PATH =
    "https://arabdreams-static-assets.s3.me-south-1.amazonaws.com/tela/images";

export const getImage = (endPoint) => {
    return IMAGE_PATH + endPoint;
};
