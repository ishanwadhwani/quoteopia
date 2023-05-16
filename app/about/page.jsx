import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <div>
        <h1 className='head_text text-center'>ABOUT</h1>
        <br />
        <div className='desc text-center'>
        <p>
            Welcome to Quoteopia, a virtual space filled with motivational sayings. 
            Words have the ability to change our life, according to Quoteopia. 
            Because of this, we built a platform where anyone can post, share, 
            and find the best quotations that uplift and motivate them.
            Quoteopia is the ideal location to let your creativity run wild and express yourself, 
            whether you're an experienced quote writer or just getting started. We offer a welcome 
            and safe community where you may meet others who share your love of quotes and self-expression.
        </p>
        <br />
        <p>
            You can share quotes from your favourite authors and books, 
            post your own quotes, or browse our collection of motivational sayings from well-known people on Quoteopia. 
            By leaving comments on other users' quotes, enjoying and sharing them, and participating in in-depth discussions, 
            you may join our community as well.
            In addition, we provide a number of tools that will enhance your quote writing experience. 
            You may design a profile that is uniquely you, save your favourite quotes, 
            and receive notifications when other users like or comment on your postings.
        </p>
        <br />
        <p>
            Join us on this inspirational and self-expression adventure. 
            Make <Link href='/'> <span className='orange_gradient cursor-pointer'>Quoteopia</span> </Link> your go-to resource for all things related to quotes.
        </p>
        </div>
    </div>
  )
}

export default About