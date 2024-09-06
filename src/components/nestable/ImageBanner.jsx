const ImageBanner = ({ blok }) => (
  <section className="w-full my-8">
    <img
      src={blok.image.filename}
      alt="Banner"
      className="w-full max-w-3xl h-64 mx-auto object-cover" // Limit size
    />
  </section>
);

export default ImageBanner;
