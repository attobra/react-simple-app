import React from 'react'
import emptyharness from './img/emptyharness.jpg' 
import shoes from './img/shoes.jpg' 
import chalk from './img/chalk.jpg'
import helmet from './img/helmet.jpg'

function Equipment() {
  return (
    <div className="main">
		  <h2 className="equip">Equipment</h2>
		  <p>To climb safely, you will need a few pieces of basic equipment. Most rock climbing gyms will rent this equipment to you. You can also buy your own equipment from an outdoor gear store like <a href="http://www.rei.com">REI</a>, or look for used gear on <a href="http://raleigh.craigslist.org/">Craigslist</a>. I highly recommend using rental gear first, before you buy. That will give you a change to find out what you like. Remember, you can don't have to buy everything at once.</p>

		  <h3>Harness</h3>
		  <img className="alignright" src={emptyharness} alt="A rock climbing harness" />
		  <p>A harness is an absolute requirement for top rope climbing. (You don't use a harness when bouldering.) The harness fits across your waist and legs, attaching you to the rope. Most places have rental harnesses, but they are generally "universal" harnesses designed to fit nearly anyone. They work, but they tend to be very uncomfortable. If you decide you enjoy climbing, it is worth buying your own harness quickly.</p>
		  <p>Because a harness is life-saving safety gear <strong>be very careful</strong> if you buy used gear. A used harness may have been damaged in a fall in a way you cannot see. Don't trust your life to a Craigslist seller. Be sure to inspect any used gear very carefully.</p>
		  <p>Harnesses in the United States generally come sized from extra-small to extra-large. However, these sizes often do not correspond to your pants or dress size, especially if you have a narrow waist. I suggest buying your first harness at a retail store, where an experienced salesperson can help you fit your harness. Expect to spend between $50 and $80 for a basic harness.</p>

		  <h3>Shoes</h3>
		<img className="alignright" src={shoes} alt="A rock climbing shoe" />
		<p>When you first start climbing you can wear a pair of tennis shoes for the basic routes. If you wish to progress to harder routes, though, you will need a pair of specialized climbing shoes. These shoes are usually worn very tight and have a slight curve to them. They allow you to put your weight on a small part of your foot and remain stable. They also have a textured sole that is a bit more "sticky," allowing you to plant your foot against the wall for balance and stability, even without a hold.</p>
		<p>Rock climbing shoes are generally either leather or a synthetic suede-like material. They come in a variety of styles. Very technical shoes tend to have a rigid sole and a pronounced curve. They look painful because they are! As a beginner, you will probably want a shoe with a softer, more flexible sole.</p>
		<p>These shoes come in standard men and women's shoe sizes. However, most climbers prefer tight-fitting shoes and will buy a size or so down from their regular shoe sizes. As a rule, shoes marketed to women are narrower than those marketed to men. If you have a very narrow foot, stick to women's shoes; if you have a wide foot buy men's shoes. They generally look very similar.</p>
		<p>I strongly recommend renting shoes at first, until you find a size and style that works for you. Shoes are an excellent piece of gear to buy used. Because they are such a personalized piece of gear, many people buy a pair, wear them once or twice, and then sell them because they do not like the fit. If you do buy new shoes, expect to pay between $70 and $100 for a pair of starter shoes.</p>

		<h3>Chalk Bag and Carabiners</h3>
		<img class="alignright" src={chalk} alt="A chalk bag and a carabiner" />
		<p>Like Olympic gymnasts on the parallel bars, climbers need to get a good grip. At any gym, you will notice climbers chalking their hands before they start. Climbers store their chalk in a drawstring bar they can attach to their harness. They are not a necessity, but they are helpful. Chalk bags are inexpensive, $15-$20. They are often sold as  part of a package deal with a harness.</p>
		<p>You'll attach your chalk bar to your harness with a carabiner. Your belayer will also use a carabiner to anchor him or herself to the belay device. Carabiners are sturdy metal links with a gate, or opening, on one side. Most have a locking mechanism of some kind, to keep them from opening accidentally. Larger weight-bearing carabiners are around $10-$15. You should have a least two. You can buy smaller carabiner for attaching gear to your belt for just a few dollars.</p>

		<h3>Helmet</h3>
		<img class="alignright" src={helmet} alt="A climbing helmet" />
		<p>Among climbers, these are known as "brain buckets." A helmet does exactly what you'd think: it protects your head from impact. Impact can come from you hitting a rock or a rock hitting you. The second is actually fairly common outdoors, where falling rocks are a danger. As an added bonus, it protects you from bird droppings.</p>
		<p>A retail climbing helmet is generally very light and comfortable. The climbing helmets that most gyms rent out are designed to be sturdy, and are usually much heavier and less comfortable. Either way, you want a helmet designed and rated for climbing. A bike helmet is not sufficient--they are designed to take impacts from a different direction. (They also tend to have holes, which makes them less effective protection from debris and bird droppings.)</p>
		<p>I don't wear a helmet when climbing in a gym; most adults don't. If you are climbing with an incautious or clumsy child, it might be a good idea to have them wear one, though. If you go climbing outdoors, you do need a helmet.</p>
		<p>Climbing helmets are usually adjustable to a wide range of sizes. Unless you have a very small head (or really hate the available colors), buy a men's or unisex helmet. The helmets marketed to women tend to be less adjustable, and don't have any other benefits. Be <strong>be very careful</strong> if you buy a used helmet, and inspect it for any signs of damage. If you take a fall and impact your helmet, you should probably replace it. A helmet costs about $60.</p>

		  </div>
  )
}

export default Equipment
