const CONFIG = {
  baseUrl: "https://placeholder.cloudfront.net",
  projects: [
    {
      id: "portraits",
      title: "Portraits",
      description: "A collection of commissioned portraits and corporate headshots",
      cover: { src: "https://picsum.photos/seed/urban-cover/1600/1067", orientation: "landscape" },
      images: [
        { src: "https://picsum.photos/seed/urban-01/1600/1067", orientation: "landscape", caption: "Sarah, London, 2024" },
        { src: "https://picsum.photos/seed/urban-02/800/1200", orientation: "portrait", caption: "Corporate commission, Canary Wharf" },
        { src: "https://picsum.photos/seed/urban-03/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/urban-04/800/1200", orientation: "portrait", caption: "Available light, north-facing window" },
        { src: "https://picsum.photos/seed/urban-05/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/urban-06/800/1200", orientation: "portrait" },
      ]
    },
    {
      id: "japan",
      title: "Travel: Japan",
      description: "Lorem ipsum.",
      cover: { src: "https://picsum.photos/seed/water-cover/1600/1067", orientation: "landscape" },
      images: [
        { src: "https://picsum.photos/seed/water-01/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/water-02/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/water-03/800/1200", orientation: "portrait" },
        { src: "https://picsum.photos/seed/water-04/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/water-05/800/1200", orientation: "portrait" },
        { src: "https://picsum.photos/seed/water-06/1600/1067", orientation: "landscape" },
      ]
    },
    {
      id: "norfolk-beaches",
      title: "Norfolk Beaches",
      description: "Lorem ipsum.",
      cover: { src: "https://picsum.photos/seed/interior-cover/800/1200", orientation: "portrait" },
      images: [
        { src: "https://picsum.photos/seed/interior-01/800/1200", orientation: "portrait" },
        { src: "https://picsum.photos/seed/interior-02/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/interior-03/800/1200", orientation: "portrait" },
        { src: "https://picsum.photos/seed/interior-04/800/1200", orientation: "portrait" },
        { src: "https://picsum.photos/seed/interior-05/1600/1067", orientation: "landscape" },
        { src: "https://picsum.photos/seed/interior-06/800/1200", orientation: "portrait" },
      ]
    },
    {
      id: "carrow-road",
      title: "Carrow Road",
      description: "A dream come true: a shoot at Carrow Road, home of Norwich City FC",
      cover: { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-22.jpg", orientation: "landscape" },
      images: [
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-18.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-19.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-22.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-37.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-42.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-47.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-62.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-71.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/carrow-road/Harrod-Groundsman-8.jpg", orientation: "landscape" },
      ]
    },
    {
      id: "scott-racing",
      title: "Scott Automotive",
      description: "A shoot with a Scott Automotive: local race car engineering, restoration, and track preparation specialists",
      cover: { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-56.jpg", orientation: "landscape" },
      images: [
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-110.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-159.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-206.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-25.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-27.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-56.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-60.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-72.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-79.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/scott-racing/Adrian+Flux+Classics-92.jpg", orientation: "landscape" },
      ]
    },
    {
      id: "yr-wyddfa",
      title: "Yr Wyddfa",
      description: "An ongoing series on Snowdon — returning to the mountain across seasons and conditions.",
      cover: { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-18.jpg", orientation: "landscape" },
      images: [
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-18.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-25.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-44.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-51.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-52.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-56.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-62.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-63.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-64.jpg", orientation: "landscape" },
        { src: "https://dan-portfolio-images.s3.eu-north-1.amazonaws.com/snowdon/snowdon-7.jpg", orientation: "landscape" },
      ]
    }
  ]
};
