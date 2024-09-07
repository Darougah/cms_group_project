import { getStoryblokApi } from '@storyblok/react';
import ProductList from '@/components/nestable/ProductList'; // Adjust the path based on your project structure

const ProductPage = ({ story }) => {
  if (!story) {
    return <p>No products found.</p>;
  }

  return (
    <main>
      <ProductList products={story.content.products} />
    </main>
  );
};

export async function getStaticProps() {
  const StoryblokApi = getStoryblokApi();
  
  try {
    const { data } = await StoryblokApi.get('cdn/stories/productpage'); // Ensure your slug is correct here
    return {
      props: {
        story: data ? data.story : null,
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching product page:', error);
    return {
      props: {
        story: null,
      },
    };
  }
}

export default ProductPage;
