import React from 'react';
import './Post.css';
import '../css/960_12_col.css';

class Post extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="container grid_12">

        <h2 id="Date">.: Saturday October 28, 2017 :.</h2>

        <article id="blogpost" className="article grid_8">
          <blockquote>"When we seek to destroy others, we often hurt ourself. Because it is the self that wants to be destroyed." <br/>- Pierce, Community</blockquote>
          <p>Tao of Seneca - Practical Letters from a Stoic Master</p>
          <p>On Saving Time</p>
          'Whatever years be behind us are in death's hands'
          Don't waste time idly
          Nothing is ours except time, you cannot repay time
        </article>

        <aside id="right" className="article grid_3">
          List of Blog Posts by Year
          <p>. </p>
        </aside>

        <h2 id="Date" className="article grid_8">.: Sunday October 29, 2017 :.</h2>

        <article id="blogpost" className="article grid_8">
          <blockquote>"When you really know who you are and what you like about yourself, changing for other people isn't such a big deal" <br/>- Abed, Community</blockquote>
          <p>Tao of Seneca - Practical Letters from a Stoic Master
          On Saving Time
          On Discursiveness in Reading
          Choose wisely what you read, and only read one book at a time
          'It is not the man who has too little, but the man who craves more, that is poor'

          On True and False Friendship
          You must pass judgment before you make one your friend
          It is equally faulty to trust all with your secrets and none
          Tell your friend all your secrets that you would share with yourself

          On the Terrors of Death
          You can die at any moment from a king or a slave, there is no point worrying about it
          "for many men clutch and cling to life, even as those who are carried down a rushing stream clutch and cling to briars and sharp rocks"

          On the Philosophers' Mean
          Our exterior should conform to society, but inwardly we should be different, otherwise we will repel those whom we are trying to improve
          Being a philosopher doesn't mean that you need to you have to live in penance, just plain/neat living
          Fear follows hope - when our memory recalls tortures of the past, our foresight anticipates them --> live in the present

          On Sharing Knowledge
          No good thing is pleasant to possess without good friends to share it with
          Discussing with people is better than just reading words

          On Crowds
          There are too many temptations and vices when you hang out with crowds
          It is too easy to side with the majority, and much harm can be done to your soul from just one vice
          When you are in a crowd, either you must imitate the crowd, or loath them
          If you have to go in a crowd, look inward, and try to find those who will better yourself
          The things you learn are meant for you, and don't need to be ostentatiously shared

          On the Philosopher's Seclusion
          Only fall to sleep when you must and your eyes are wary
          Nothing but the soul is worthy of wonder
          Avoid pleasure; indulge your body only as much as you need to

          On the Philosopher's Friendship
          A wise man can do without friends but he does not have to desire to do so
          Be self-sufficient
          Only a wise men is pleased with himself

          On Living to Oneself
          Pray to god only for those things that you pray for openly

          On the Blush of Modesty
          Wisdom cannot remove blushing; we cannot forbid these feelings just as we cannot summon them
          </p>
        </article>
      </div>
    );
  }
}

export default Post;
