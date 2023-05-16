import Feed from '@components/Feed'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          QUOTEOPIA
        <br className="max-md:hidden"/>
        </h1>
        <span className="head_text pink_gradient text-center">
          The Land of Quotes
        </span>
        <p className="desc text-center">
            Welcome to Quoteopia,
            we think that words have the ability to change our lives. 
            That is why I built a platform where anyone can post, share, 
            and find the best quotes that inspire and motivate them.
        </p>

        <Feed/>
    </section>
  )
}

export default Home